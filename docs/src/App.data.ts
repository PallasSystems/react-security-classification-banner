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
    scm: {
      project: 'PallasSystems',
      repository: 'react-bootstrap-table',
      imgProps: {
        id: 'SourceLink',
        height: '2rem',
        width: '2.5rem',
        className: 'd-inline-block',
      },
    },
    sticky: 'top',
  },
  footerProps: {
    contact: {
      email: 'info@pallas.uk',
    },
    socialMedia: {
      facebook: '350073883439443',
      linkedin: 'pallas-systems-ltd',
      twitter: 'PallasUK',
    },
    companyName: 'Pallas Systems',
    companyNameLink: 'https://www.pallas.uk',
  },
};
