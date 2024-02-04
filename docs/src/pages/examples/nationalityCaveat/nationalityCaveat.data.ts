export const GetBannerExamples = (): string => {
  return (
    'const SecurityBannerPage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'}>\n" +
    "\t\t\t<SecurityBanner records={{ classification: 'OFFICIAL', codeWords: ['CODEWORD'], nationalityCaveat: ['GBR']  }} />\n" +
    "\t\t\t<SecurityBanner records={{ classification: 'SECRET', codeWords: ['CODEWORD'], nationalityCaveat: ['NATO']  }} />\n" +
    "\t\t\t<SecurityBanner records={{ classification: 'TOP SECRET', codeWords: ['CODEWORD'], nationalityCaveat: ['AUS', 'GBR']  }} />\n" +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};
