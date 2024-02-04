import { ReactNode } from 'react';
import { ExamplesPage, ExamplesPageProperties } from './examples.types';
import { SimpleBannerExamplesPage } from './simple';
import { CodeWordsBannerExamplesPage } from './codeWords';

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
];
