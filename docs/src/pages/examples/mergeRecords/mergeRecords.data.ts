export const GetBannerExamples = (): string => {
  return (
    'const SecurityBannerPage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'}>\n" +
    '\t\t\t<SecurityBanner records={[\n' +
    "\t\t\t\t\t{ classification: 'SECRET', codeWords: ['CODEWORD'] },\n" +
    "\t\t\t\t\t{ classification: 'TOP SECRET', nationalityCaveat: ['GBR'] }, \n" +
    '\t\t\t\t]} />\n' +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};
