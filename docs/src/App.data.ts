import { ReactNode } from 'react';

import { ImageProperty, NavbarLinkProperty } from '@pallassystems/website-core';

import { HomePageProperties } from './pages';
import { getRBTIcon } from './App.icon';

export const ExamplePageNavData: NavbarLinkProperty[] = [
  {
    path: '/examples/quick',
    id: 'quick-example-page',
    text: 'Quick Examples',
    items: [
      { path: '/examples/basic', id: 'react-bootstrap-table-table--basic-example', text: 'Basic Example', items: [] },
      {
        path: '/example/minimal',
        id: 'react-bootstrap-table-table--minimal-example',
        text: 'Minimal Example',
        items: [],
      },
    ],
  },
  {
    path: '/examples/fundamentals',
    id: 'fundamentals-example-page',
    text: 'Fundamentals',
    items: [
      {
        path: '/examples/fundamentals/modifiedAccessorFN',
        id: 'react-bootstrap-table-table--accessor-functions',
        text: 'Making use of Accessor Functions',
        items: [],
      },
      {
        path: '/examples/fundamentals/modifiedCellFN',
        id: 'react-bootstrap-table-table--modified-cell-functions',
        text: 'Modifying Table Cells',
        items: [],
      },
      {
        path: '/examples/fundamentals/modifiedHeaderFN',
        id: 'react-bootstrap-table-table--modified-header-functions',
        text: 'Modifying Table Headers',
        items: [],
      },
    ],
  },
  {
    path: '/examples/styling',
    id: 'style-example-page',
    text: 'Styling',
    items: [
      {
        path: '/examples/styling/varients',
        id: 'react-bootstrap-table-table--table-varients',
        text: 'Making use of Accessor Functions',
        items: [],
      },
    ],
  },
];

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
      { path: '/gettingStarted', id:'', text: 'Getting Started' },
      { path: '/api', id:'', text: 'API' },
      {
        text: 'Examples',
        path: '/examples',
        id: '',
        items: ExamplePageNavData,
      }
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
