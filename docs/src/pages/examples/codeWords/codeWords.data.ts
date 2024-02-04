export const GetBannerExamples = (): string => {
  return (
    'const SecurityBannerPage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'}>\n" +
    "\t\t\t<SecurityBanner records={{ classification: 'OFFICIAL', codeWords: ['CODE', 'EXAMPLE', 'WORDS']  }} />\n" +
    "\t\t\t<SecurityBanner records={{ classification: 'SECRET', codeWords: ['CODE', 'EXAMPLE', 'WORDS']  }} />\n" +
    "\t\t\t<SecurityBanner records={{ classification: 'TOP SECRET', codeWords: ['CODE', 'EXAMPLE', 'WORDS']  }} />\n" +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};
