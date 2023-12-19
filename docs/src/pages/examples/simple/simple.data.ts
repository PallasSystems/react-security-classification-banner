export const GetBannerExamples = (): string => {
  return (
    'const SecurityBannerPage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    '\t\t\t<SecurityBanner />\n' +
    "\t\t\t<SecurityBanner records={{ classification: 'OFFICIAL' }} />\n" +
    "\t\t\t<SecurityBanner records={{ classification: 'SECRET' }} />\n" +
    "\t\t\t<SecurityBanner records={{ classification: 'TOP SECRET' }} />\n" +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};
