import { GetISO3166Alpha3FromISO3166Alpha2, IsOrganisation, IsUK } from './country.reference';
import type { ISO_3166_1_ALPHA2, ISO_3166_1_ALPHA3, Organisation } from './country.types';

export const GetNationalityCaveatText = (
  classification?: string,
  values?: Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[],
) => {
  let result = '';

  values?.forEach((value: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2) => {
    // Convert each stored caveat and generate a ISO 3166 Alpha 3 label for it
    const country = GetOriginatingNationText(classification, value);
    //
    if (country && country.length > 0) {
      if (result.length > 0) {
        result += ' / ';
      }

      result += country;
    }
  });

  if (result.length > 0) {
    result += ' EYES ONLY';
  }

  return result;
};

/**
 * This will retrieve the correct originating nation from the data to use as a text string.
 * @param classification
 * @param country
 * @returns
 */
export const GetOriginatingNationText = (
  classification?: string,
  country?: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2,
) => {
  let result = '';

  if (classification) {
    if (classification.startsWith('OFFICIAL') || classification === 'SECRET' || classification === 'TOP SECRET') {
      if (country) {
        if (IsUK(country)) {
          result = 'UK';
        } else if (IsOrganisation(country)) {
          result = country;
        } else if (country.length === 3) {
          result = country as ISO_3166_1_ALPHA3;
        } else {
          const alpha2 = GetISO3166Alpha3FromISO3166Alpha2(country as ISO_3166_1_ALPHA2);
          if (alpha2) {
            result = alpha2;
          }
        }
      }
    }
  }

  return result;
};
