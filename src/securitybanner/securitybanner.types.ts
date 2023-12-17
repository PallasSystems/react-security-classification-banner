import { CSSProperties } from 'react';
import { Classification } from '../classification';
import { Descriptors, OfficialDescriptors } from '../descriptors';
import { CountryOrOrgProp } from '../country';
import { HandlingInstruction } from '../handlingInstructions';

/**
 * The Security Classification information.
 *
 * @param originatingEntity
 * @param classification
 * @param handlingInstruction
 * @param descriptors
 * @param codeWords
 * @param nationalityCaveat
 * @param releaseabilityMarking
 */
export type SecurityClassification = {
  originatingEntity?: CountryOrOrgProp;
  classification?: Classification;
  handlingInstruction?: HandlingInstruction;
  descriptors?: OfficialDescriptors[] | Descriptors[];
  codeWords?: string[];
  nationalityCaveat?: CountryOrOrgProp[];
  releaseabilityMarking?: CountryOrOrgProp[];
};

/**
 *
 */
export type SecurityBannerProps = {
  records: SecurityClassification | SecurityClassification[];
  style?: CSSProperties;
  upTo?: boolean;
};
