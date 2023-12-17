import { GetISO3166Alpha3FromISO3166Alpha2, IsOrganisation, IsUK } from './country.reference';
import type { CountryOrOrgProp, ISO_3166_1_ALPHA2, ISO_3166_1_ALPHA3, Organisation } from './country.types';

/**
 *
 * @param classification
 * @param values
 * @returns
 */
export const GetNationalityCaveatText = (classification?: string, values?: CountryOrOrgProp[]) => {
  let result = '';

  values?.forEach((value: CountryOrOrgProp) => {
    // Convert each stored caveat and generate a ISO 3166 Alpha 3 label for it
    const CountryOrOrgProp = GetOriginatingNationText(classification, value);
    //
    if (CountryOrOrgProp && CountryOrOrgProp.length > 0) {
      if (result.length > 0) {
        result += ' / ';
      }

      result += CountryOrOrgProp;
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
 * @param CountryOrOrgProp
 * @returns
 */
export const GetOriginatingNationText = (classification?: string, CountryOrOrgProp?: CountryOrOrgProp) => {
  let result = '';

  if (classification) {
    if (classification.startsWith('OFFICIAL') || classification === 'SECRET' || classification === 'TOP SECRET') {
      if (CountryOrOrgProp) {
        if (IsUK(CountryOrOrgProp)) {
          result = 'UK';
        } else if (IsOrganisation(CountryOrOrgProp)) {
          result = CountryOrOrgProp;
        } else if (CountryOrOrgProp.length === 3) {
          result = CountryOrOrgProp as ISO_3166_1_ALPHA3;
        } else {
          const alpha2 = GetISO3166Alpha3FromISO3166Alpha2(CountryOrOrgProp as ISO_3166_1_ALPHA2);
          if (alpha2) {
            result = alpha2;
          }
        }
      }
    }
  }

  return result;
};
