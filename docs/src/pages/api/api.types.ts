import { FooterProperties, NavbarProperty } from '@pallassystems/website-core';
import { ReactNode } from 'react';

type ApiPageProperties = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
};

type ApiPage = {
  link: string;
  text: string;
  page: (properties: ApiPageProperties) => ReactNode;
};

type ApiTableEntry = {
  field: String;
  type: String;
  required: String;
  description: string;
};

type ApiEnumTableEntry = {
  field: String;
  description: string;
};

export type { ApiPage, ApiPageProperties, ApiEnumTableEntry, ApiTableEntry };
