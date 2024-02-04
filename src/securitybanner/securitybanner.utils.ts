import { MergeClassifications } from '../classification';
import { MergeHandlingNation, MergeNationalityCaveat } from '../country';
import { MergeDescriptors } from '../descriptors';
import { SecurityClassification } from './securitybanner.types';

/**
 * Code words apply at SECRET and TOP SECRET, this confirms the classification is the correct level
 * and converts the codeword array into a string.
 *
 * @param classification the security classification (can be null/undefined)
 * @param codewords the code words to convert into a string.
 * @returns an empty string if no codewords or too low a classification level.
 */
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
  return 'CONTAINS INFORMATION UP TO';
};

/**
 * This will provide an UPTO label if the boolean is selected or more than one record is in the data.
 *
 * @param data the security classifications (can be a record or an array or records)
 * @param upTo if we want to force UpTo
 * @returns empty string if upto is not appropriate.
 */
export const GetUpToText = (data: SecurityClassification | SecurityClassification[], upTo?: boolean): string => {
  return (upTo && upTo === true) || (Array.isArray(data) && data.length > 1) ? I18nUpToText() : '';
};

/**
 * This function will merge 2 string arrays in a non duplicating fashion.
 * @param a a string array to merge
 * @param b a string array to merge
 * @param predicate
 * @returns an empty array if the supplied are empty or a concat array with no duplicates
 */
const MergeStringArray = (a: string[], b: string[], predicate = (a: string, b: string) => a === b) => {
  const c = [...a]; // copy to avoid side effects
  // add all items from B to copy C if they're not already present
  b.forEach((bItem) => (c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)));
  return c;
};

/**
 * This will merge 2 codeword listings, this will create a non duplicating concatation of the supplied string arrays.
 *
 * @param original codewords to be merged
 * @param toMerge  codewords to be merged
 * @returns an empty array or a concatation of the supplied arrays.
 */
export const MergeCodeWords = (original?: string[], toMerge?: string[]): string[] => {
  let result: string[] = [];

  if (original && original.length > 0) {
    if (toMerge && toMerge.length > 0) {
      result = MergeStringArray(original, toMerge);
    } else {
      result = original;
    }
  } else if (toMerge && toMerge.length > 0) {
    result = toMerge;
  }

  return result;
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
        result.originatingEntity = MergeHandlingNation(result.originatingEntity, value.originatingEntity);
        result.classification = MergeClassifications(result.classification, value.classification);
        result.descriptors = MergeDescriptors(result.descriptors, value.descriptors);
        result.codeWords = MergeCodeWords(result.codeWords, value.codeWords);
        result.nationalityCaveat = MergeNationalityCaveat(result.nationalityCaveat, value.nationalityCaveat);
      });
    }
  } else {
    result = data;
  }

  return result;
};
