import { Descriptors, OfficialDescriptors } from './descriptors.types';

/**
 *
 * @returns
 */
export const GetOFFICIALDescriptors = (): Descriptors[] => {
  return [
    'LEGAL',
    'LEGAL PROFESSIONAL PRIVILEGE',
    'MARKET SENSITIVE',
    'COMMERCIAL',
    'HR / MANAGEMENT',
    'PERSONAL DATA',
  ];
};

/**
 *
 * @returns
 */
export const GetSecretDescriptors = (): Descriptors[] => {
  return ['LEGAL PROFESSIONAL PRIVILEGE', 'MARKET SENSITIVE', 'COMMERCIAL'];
};

/**
 *
 * @returns
 */
export const GetTopSecretDescriptors = (): Descriptors[] => {
  return ['LEGAL PROFESSIONAL PRIVILEGE', 'MARKET SENSITIVE', 'COMMERCIAL'];
};

/**
 *
 * @param classification
 * @param descriptors
 * @returns
 */
export const GetDescriptorText = (classification?: string, descriptors?: OfficialDescriptors[] | Descriptors[]) => {
  let result = '';

  if (classification) {
    if (classification?.startsWith('OFFICIAL')) {
      // Filter out non OFFICIAL Values
      const filtered = descriptors?.filter((value) => {
        return GetOFFICIALDescriptors().find((officialValue) => {
          return value === officialValue;
        });
      });

      result = filtered?.join(' ') ?? '';
    } else if (classification?.startsWith('SECRET')) {
      // Filter out non SECRET Values
      const filtered = descriptors?.filter((value) => {
        return GetSecretDescriptors().find((secretValue) => {
          return value === secretValue;
        });
      });

      result = filtered?.join(' ') ?? '';
    } else if (classification?.startsWith('TOP SECRET')) {
      // Filter out non TOP SECRET Values
      const filtered = descriptors?.filter((value) => {
        return GetTopSecretDescriptors().find((secretValue) => {
          return value === secretValue;
        });
      });

      result = filtered?.join(' ') ?? '';
    }
  }

  return result;
};

/**
 * This will create a non duplicate descriptor merge of the supplied values.
 *
 * @param original list of descriptors to be merged
 * @param toMerge list of descriptors to be merged
 * @returns an empty array or a merge of the supplied values.
 */
export const MergeDescriptors = (
  original?: OfficialDescriptors[] | Descriptors[],
  toMerge?: OfficialDescriptors[] | Descriptors[],
): Descriptors[] => {
  const results: Descriptors[] = [];

  if (original) {
    original.forEach((value) => {
      results.push(value);
    });
  }

  if (toMerge) {
    toMerge.forEach((value) => {
      results.push(value);
    });
  }

  return results.filter((item, idx) => results.indexOf(item) === idx);
};
