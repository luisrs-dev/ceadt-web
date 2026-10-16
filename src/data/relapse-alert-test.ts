import type { TestQuestion } from './biopsychosocial-test';
export const relapseOptions = ['Nunca', 'Pocas veces', 'A veces', 'Relativamente a menudo', 'A menudo', 'Casi siempre', 'Siempre'] as const;
/** Preguntas de las capturas; pregunta 7 completada expresamente por el usuario. */
const statements: { number: number; title: string }[] = [
  { number: 1, title: 'Me siento nervioso o inseguro de mis recursos para mantenerme libre de drogas.' },
  { number: 2, title: 'Tengo muchos problemas en mi vida que afectan mi estado emocional.' },
  { number: 3, title: 'Tiendo a actuar impulsivamente.' },
  { number: 4, title: 'Soy reservado y me siento solo.' },
  { number: 5, title: 'Me enfoco mucho en una o varias áreas de mi vida.' },
  { number: 6, title: 'Me siento triste, desanimado o deprimido.' },
  { number: 7, title: 'Me dedico a hacerme ilusiones sobre el consumo.' },
  { number: 8, title: 'Los planes que tengo tienen éxito.' },
  { number: 9, title: 'Tengo dificultades para concentrarme y prefiero imaginar cómo podrían ser las cosas.' },
  { number: 10, title: 'Lo que suelo realizar no me sale bien.' },
  { number: 11, title: 'Me siento confundido sobre volver a consumir.' },
  { number: 12, title: 'Me irrito y molesto con mis amigos.' },
  { number: 13, title: 'Me siento enojado o frustrado.' },
  { number: 14, title: 'Tengo buenos hábitos alimenticios.' },
  { number: 15, title: 'Me siento atrapado y estancado.' },
  { number: 16, title: 'Tengo dificultad para dormir.' },
  { number: 17, title: 'Tengo largos períodos de tristeza interna.' },
  { number: 18, title: 'Me da igual, suceda lo que suceda.' },
  { number: 19, title: 'Siento que las cosas están tan mal, que podría consumir drogas.' },
  { number: 20, title: 'Soy capaz de pensar con claridad.' },
  { number: 21, title: 'Siento lástima de mí mismo.' },
  { number: 22, title: 'Pienso reiteradamente en consumir drogas.' },
  { number: 23, title: 'Miento a otras personas.' },
  { number: 24, title: 'Me siento seguro y lleno de esperanza.' },
  { number: 25, title: 'Me siento enojado con el mundo en general.' },
  { number: 26, title: 'Estoy haciendo lo posible para mantenerme en abstinencia.' },
  { number: 27, title: 'Me temo que estoy perdiendo la razón.' },
  { number: 28, title: 'Estoy consumiendo o tengo deseos de consumir drogas sin control.' },
];
export const relapseQuestions: TestQuestion[] = statements.map(({ number, title }) => ({id: `relapse-${number}`, number, title, options: relapseOptions}));
