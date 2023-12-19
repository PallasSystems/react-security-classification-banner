// Getting Started Page Properties
import { ApiTableEntry } from '../api.types';

export const SecurityClassificationColumnDefData: ApiTableEntry[] = [
  {
    field: 'records',
    type: 'SecurityClassification | SecurityClassification[]',
    required: 'true',
    description: '',
  },
  {
    field: 'style',
    type: 'CSSProperties',
    required: 'false',
    description: '',
  },
  {
    field: 'upTo',
    type: 'boolean',
    required: 'false',
    description: '',
  },
];
