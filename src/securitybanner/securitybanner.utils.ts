import { MergeClassifications } from '../classification/classification';
import { SecurityClassification } from './securitybanner.types';

export const GetCodeWordText = (classification?: string, codewords?: string[]) => {
  let result = '';

  if (classification) {
    if (!classification?.startsWith('OFFICIAL')) {
      result = codewords?.join(' ') ?? '';
    }
  }

  return result;
};

/**
 * Security Classification prefix when there is a range of security classifications.
 * @returns the string 'Contains'
 */
export const I18nUpToText = () => {
  return 'Contains information up to';
};

/**
 * This will provide an UPTO label if the boolean is selected
 * @param data
 * @param upTo
 * @returns
 */
export const GetUpToText = (data: SecurityClassification | SecurityClassification[], upTo?: boolean): string => {
  return (upTo && upTo === true) || (Array.isArray(data) && data.length > 1) ? I18nUpToText() : '';
};

/**
 *
 * @param data
 * @returns
 */
export const GetSecurityClassification = (
  data: SecurityClassification | SecurityClassification[],
): SecurityClassification => {
  let result: SecurityClassification = {};
  if (Array.isArray(data)) {
    if (data.length > 0) {
      data.forEach((value) => {
        result.classification = MergeClassifications(result.classification, value.classification);
      });
    }
  } else {
    result = data;
  }

  return result;
};
