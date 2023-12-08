import { CSSProperties } from 'react';
import { Classification } from '../classification';
import { Descriptors, OfficialDescriptors } from '../descriptors';
import { ISO_3166_1_ALPHA2, ISO_3166_1_ALPHA3, Organisation } from '../country';
import { HandlingInstruction } from '../handlingInstructions';

export type SecurityClassification = {
  originatingEntity?: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2;
  classification?: Classification;
  handlingInstruction?: HandlingInstruction;
  descriptors?: OfficialDescriptors[] | Descriptors[];
  codeWords?: string[];
  nationalityCaveat?: Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[];
  releaseabilityMarking?: Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[];
};

export type SecurityBannerDisplayProps = {
  style?: CSSProperties;
};

export type SecurityBannerProps = SecurityClassification & SecurityBannerDisplayProps;
