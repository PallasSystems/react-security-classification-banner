// Getting Started Page Properties
import { ApiTableEntry } from '../api.types';

export const SecurityClassificationColumnDefData: ApiTableEntry[] = [
  {
    field: 'originatingEntity',
    type: 'Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2',
    required: 'false',
    description: 'Allows users to define a function to return an element for the table header contents.',
  },
  {
    field: 'classification',
    type: 'Classification',
    required: 'false',
    description: 'Allows users to define a function to return an element for the table header contents.',
  },
  {
    field: 'handlingInstruction',
    type: 'HandlingInstruction',
    required: 'false',
    description: 'Allows users to define a function to return an element for the table header contents.',
  },
  {
    field: 'descriptors',
    type: 'OfficialDescriptors[] | Descriptors[]',
    required: 'false',
    description: 'Allows users to define a function to return an element for the table header contents.',
  },
  {
    field: 'codeWords',
    type: 'string[]',
    required: 'false',
    description: 'Allows users to define a function to return an element for the table header contents.',
  },
  {
    field: 'nationalityCaveat',
    type: 'Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[]',
    required: 'false',
    description: 'Allows users to define a function to return an element for the table header contents.',
  },
  {
    field: 'releaseabilityMarking',
    type: 'Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[]',
    required: 'false',
    description: 'Allows users to define a function to return an element for the table header contents.',
  },
];
