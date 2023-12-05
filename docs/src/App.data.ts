import { ReactNode } from 'react';

import { ImageProperty } from '@pallassystems/website-core';

import { HomePageProperties } from './pages';
import { getRBTIcon } from './App.icon';

export const PageData: HomePageProperties = {
  navBarProps: {
    brand: {
      name: 'React Classification Banner',
      imgFn: (value?: ImageProperty): ReactNode => {
        return getRBTIcon({ id: value?.id, className: value?.className, height: value?.height, width: value?.width });
      },
      imgProps: {
        id: 'BannerNavBar.Brand.Link.Logo.SVG',
        height: '2rem',
        width: '2rem',
        className: 'd-inline-block',
      },
    },
    items: [
      { path: '/gettingStarted', text: 'Getting Started' },
      { path: '/api', text: 'API' },
      { path: '/examples', text: 'Examples' },
    ],
  },
  footerProps: {
    socialMedia: {
      headerText: 'Get connected with us on social networks',
      facebook: '350073883439443',
      linkedin: 'pallas-systems-ltd',
      twitter: 'PallasUK',
      scm: {
        project: 'PallasSystems',
        repository: 'react-bootstrap-table',
      },
    },
    companyName: 'Pallas Systems',
    companyNameLink: 'https://www.pallas.uk',
  },
};
