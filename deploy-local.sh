#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REMOTE_ROOT=/home/repositories/ceadt
BUILD_ONLY=false
SSH_TARGET="${1:-}"

if [[ "$SSH_TARGET" == --build-only && $# -eq 1 ]]; then
  BUILD_ONLY=true
elif [[ $# -eq 0 || "$SSH_TARGET" == --help ]]; then
  echo "Uso: $0 usuario@host | --build-only"
  echo "Destino: $REMOTE_ROOT/dist (sitio estático)"
  exit 0
elif [[ $# -ne 1 || ! "$SSH_TARGET" =~ ^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9][a-zA-Z0-9.-]*$ ]]; then
  echo "Error: indica un único destino como usuario@host o usuario@IPv4." >&2
  exit 1
fi

for command_name in node pnpm mktemp; do
  command -v "$command_name" >/dev/null || { echo "Falta $command_name" >&2; exit 1; }
done
if [[ "$BUILD_ONLY" == false ]]; then
  for command_name in ssh rsync; do
    command -v "$command_name" >/dev/null || { echo "Falta $command_name" >&2; exit 1; }
  done
fi
if [[ ! -x "$PROJECT_DIR/node_modules/.bin/astro" ]]; then
  echo "Instala primero las dependencias locales: pnpm install" >&2
  exit 1
fi

BUILD_TMP="$(mktemp -d "${TMPDIR:-/tmp}/ceadt-deploy.XXXXXX")"
trap 'rm -rf -- "$BUILD_TMP"' EXIT

cd "$PROJECT_DIR"
echo "Validando y compilando CEADT en el equipo local..."
pnpm check
CEADT_BASE_PATH="${CEADT_BASE_PATH:-/}" pnpm build --outDir "$BUILD_TMP/dist"
test -f "$BUILD_TMP/dist/index.html"
test -d "$BUILD_TMP/dist/_astro"

if [[ "$BUILD_ONLY" == true ]]; then
  echo "Validación y compilación completadas. No se subieron archivos."
  exit 0
fi

echo "Verificando destino $SSH_TARGET..."
ssh "$SSH_TARGET" 'bash -se' <<'REMOTE_CHECK'
set -euo pipefail
command -v rsync >/dev/null
test -d /home/repositories/ceadt
mkdir -p /home/repositories/ceadt/dist
test -w /home/repositories/ceadt/dist
REMOTE_CHECK

# Solo se transfiere la compilación. No se borran archivos remotos ni se tocan otras apps.
# Los recursos antiguos se conservan para pestañas abiertas; revisar su limpieza por separado.
echo "Subiendo sitio estático..."
rsync -az --delay-updates "$BUILD_TMP/dist/" "$SSH_TARGET:$REMOTE_ROOT/dist/"
echo "Sitio subido a $REMOTE_ROOT/dist. El servidor web debe servir esa carpeta."
