import { ReactNode } from 'react';
import { RBTColumnDefs, RBTOptions } from '@pallassystems/react-bootstrap-table';

import { ExamplesPage, ExamplesPageProperties } from './examples.types';
import { SimpleBannerExamplesPage } from './simple';

export const ExamplePageData: ExamplesPage[] = [
  {
    link: '/example/simple',
    text: 'Simple Examples',
    page: (data: ExamplesPageProperties): ReactNode => {
      return SimpleBannerExamplesPage(data);
    },
  },
];
