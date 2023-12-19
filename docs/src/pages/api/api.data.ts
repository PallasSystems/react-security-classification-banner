import { ReactNode } from 'react';
import { RBTColumnDefs } from '@pallassystems/react-bootstrap-table';

import { ApiEnumTableEntry, ApiPage, ApiPageProperties, ApiTableEntry } from './api.types';
import { ApiSecurityClassificationPage } from './SecurityClassification';
import { ApiClassificationPage } from './Classification';
import { ApiDescriptorsPage } from './Descriptors';
import { ApiHandlingInstructionPage } from './HandlingInstruction';
import { ApiOfficialDescriptorsPage } from './OfficialDescriptors';
import { ApiOrganisationPage } from './Organisation';
import { ApSecurityBannerPropsPage } from './SecurityBannerProps';

export const ApiTablePageData: ApiPage[] = [
  {
    link: '/api/securityclassification',
    text: 'SecurityClassification Record',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiSecurityClassificationPage(data);
    },
  },
  {
    link: '/api/securitybannerprops',
    text: 'SecurityBannerProps',
    page: (data: ApiPageProperties): ReactNode => {
      return ApSecurityBannerPropsPage(data);
    },
  },
];

export const ApiTableTypesPageData: ApiPage[] = [
  {
    link: '/api/type/classification',
    text: 'Classification Type',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiClassificationPage(data);
    },
  },
  {
    link: '/api/type/descriptors',
    text: 'Descriptors Type',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiDescriptorsPage(data);
    },
  },
  {
    link: '/api/type/handlinginstruction',
    text: 'HandlingInstruction Type',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiHandlingInstructionPage(data);
    },
  },
  {
    link: '/api/type/officaldescriptors',
    text: 'OfficialDescriptors Type',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiOfficialDescriptorsPage(data);
    },
  },
  {
    link: '/api/type/organisation',
    text: 'Organisation Type',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiOrganisationPage(data);
    },
  },
];

// Generate the props table
export const ApiTableColumns: RBTColumnDefs<ApiTableEntry>[] = [
  {
    accessorKey: 'field',
    header: 'Field',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'required',
    header: 'Required',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];

export const ApiTableConfiguration = {
  columns: ApiTableColumns,
  footer: { enablePagination: false },
  header: { enableDensityToggle: false, enableExportButton: false },
};

// Generate the props table
export const ApiEnumTableColumns: RBTColumnDefs<ApiEnumTableEntry>[] = [
  {
    accessorKey: 'field',
    header: 'Field',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];

export const ApiEnumTableConfiguration = {
  columns: ApiEnumTableColumns,
  footer: { enablePagination: false },
  header: { enableDensityToggle: false, enableExportButton: false },
};
