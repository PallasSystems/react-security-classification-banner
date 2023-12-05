import { ISO_3166_1_ALPHA2, ISO_3166_1_ALPHA3, Organisation } from './country.types';

export const GetOriginatingNation = (
  classification?: string,
  country?: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2,
) => {
  let result = '';

  if (classification) {
    if (classification.startsWith('OFFICIAL') || classification === 'SECRET' || classification === 'TOP SECRET') {
      result = GetISO3166Alpha3(country);
    }
  }

  return result;
};

export const GetEyesOnly = (
  classification?: string,
  values?: Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[],
) => {
  let result = '';

  values?.forEach((value: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2) => {
    //
    let country = GetOriginatingNation(classification, value);
    //
    if (country && country.length > 0) {
      if (result.length > 0) {
        result += '/';
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
 *
 * @param value
 * @returns
 */
export const GetISO3166Alpha3 = (
  value?: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2,
): Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2 => {
  let result: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2 = 'UK';
  if (value) {
    if (value === 'UK' || value === 'GB' || value === 'GBR') {
      result = 'UK';
    } else if (value.length >= 3) {
      result = value;
    } else {
      // ISO Alpha 2 to Alpha 3 conversion goes here.
    }
  }

  return result;
};

export const ConvertCountryCode = (country: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2): string => {
  let result = 'UK';

  if (country) {
    result = country;

    if (country.length < 3) {
      switch (country) {
        case 'GB':
        case 'UK':
          result = 'UK';
          break;
      }
    }
  }

  return result;
};
