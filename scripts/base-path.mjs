import { env } from 'node:process';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

export const deploymentBase = env.CEADT_BASE_PATH || '/';

/** Prefix local URLs in authored HTML and public font references after static generation. */
export function basePathIntegration(base) {
  const prefix = base.replace(/\/$/, '');
  const localUrl = (url) => {
    if (!url.startsWith('/') || url.startsWith('//') || url === prefix || url.startsWith(`${prefix}/`)) return url;
    return `${prefix}${url}`;
  };
  return {
    name: 'ceadt-base-path',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (!prefix) return;
        async function visit(directory) {
          for (const entry of await readdir(directory, { withFileTypes: true })) {
            const path = join(directory, entry.name);
            if (entry.isDirectory()) { await visit(path); continue; }
            if (!/\.(html|css)$/.test(entry.name)) continue;
            const original = await readFile(path, 'utf8');
            let content = original;
            if (entry.name.endsWith('.html')) {
              content = content.replace(/\b(href|src|action|poster)="([^"<>]*)"/g, (_, attr, url) => `${attr}="${localUrl(url)}"`);
              content = content.replace(/\bsrcset="([^"]*)"/g, (_, value) => `srcset="${value.split(',').map((item) => item.replace(/^(\s*)(\S+)/, (_, space, url) => space + localUrl(url))).join(',')}"`);
            }
            content = content.replace(/url\((['"]?)(\/[^)'"\s]*)\1\)/g, (_, quote, url) => `url(${quote}${localUrl(url)}${quote})`);
            if (content !== original) await writeFile(path, content);
          }
        }
        await visit(fileURLToPath(dir));
      },
    },
  };
}
