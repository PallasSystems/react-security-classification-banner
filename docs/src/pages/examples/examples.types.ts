import { ReactNode } from 'react';
import { FooterProperties, NavbarProperty } from '@pallassystems/website-core';

type ExamplesPageProperties = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
};

type ExamplesPage = {
  link: string;
  text: string;
  page: (properties: ExamplesPageProperties) => ReactNode;
};

export type { ExamplesPage, ExamplesPageProperties };
