import { ReactNode } from 'react';
import { ExamplesPage, ExamplesPageProperties } from './examples.types';
import { SimpleBannerExamplesPage } from './simple';
import { CodeWordsBannerExamplesPage } from './codeWords';
import { NationalityCaveatBannerExamplesPage } from './nationalityCaveat';
import { MergeRecordsBannerExamplesPage } from './mergeRecords';

export const ExamplePageData: ExamplesPage[] = [
  {
    link: '/example/simple',
    text: 'Simple Examples',
    page: (data: ExamplesPageProperties): ReactNode => {
      return SimpleBannerExamplesPage(data);
    },
  },
  {
    link: '/example/codewords',
    text: 'Code Word Examples',
    page: (data: ExamplesPageProperties): ReactNode => {
      return CodeWordsBannerExamplesPage(data);
    },
  },
  {
    link: '/example/nationalityCaveats',
    text: 'Nationality Caveat Examples',
    page: (data: ExamplesPageProperties): ReactNode => {
      return NationalityCaveatBannerExamplesPage(data);
    },
  },
  {
    link: '/example/mergeRecords',
    text: 'Multiple Securty Classification Example',
    page: (data: ExamplesPageProperties): ReactNode => {
      return MergeRecordsBannerExamplesPage(data);
    },
  },
];
