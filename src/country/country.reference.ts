import type { ISO_3166_1_ALPHA2, ISO_3166_1_ALPHA3, Organisation } from './country.types';

export const IsUK = (value: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2) => {
  return value === 'UK' || value === 'GB' || value === 'GBR';
};

export const IsOrganisation = (value: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2) => {
  return value === 'EU' || value === 'NATO' || value === 'FIVE EYES';
};

/**
 *
 * @param value
 * @returns
 */
export const GetISO3166Alpha3 = (value?: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2): ISO_3166_1_ALPHA3[] => {
  let result: ISO_3166_1_ALPHA3[] = [];

  if (value) {
    if (IsUK(value)) {
      result = ['GBR'];
    } else if (IsOrganisation(value)) {
      result = GetISO3166Alpha3FromOrganisation(value as Organisation);
    } else if (value.length === 3) {
      result = [value as ISO_3166_1_ALPHA3];
    } else {
      const alpha2 = GetISO3166Alpha3FromISO3166Alpha2(value as ISO_3166_1_ALPHA2);
      if (alpha2) {
        result = [alpha2];
      }
    }
  }

  return result;
};

/**
 * This will convert the organisation into the countries which make up the organisation.
 *
 * @param value The values to convert into the Alpha3 Form.
 * @returns the list of countries associated with the supplied organisation.
 */
export const GetISO3166Alpha3FromOrganisation = (value?: Organisation): ISO_3166_1_ALPHA3[] => {
  let results: ISO_3166_1_ALPHA3[] = [];

  if (value) {
    switch (value) {
      case 'EU':
        results = [
          'AUT',
          'BEL',
          'BGR',
          'HRV',
          'CYP',
          'CZE',
          'DNK',
          'EST',
          'FRA',
          'DEU',
          'GRC',
          'HUN',
          'IRL',
          'ITA',
          'LVA',
          'LTU',
          'LUX',
          'MLT',
          'NLD',
          'POL',
          'PRT',
          'ROU',
          'SVK',
          'SVN',
          'ESP',
          'SWE',
        ];
        break;
      case 'NATO':
        results = [
          'ALB',
          'BEL',
          'BGR',
          'CAN',
          'HRV',
          'CZE',
          'DNK',
          'EST',
          'FIN',
          'FRA',
          'DEU',
          'GRC',
          'HUN',
          'ISL',
          'ITA',
          'LVA',
          'LTU',
          'LUX',
          'MNE',
          'NLD',
          'MKD',
          'NOR',
          'POL',
          'PRT',
          'ROU',
          'SVK',
          'SVN',
          'ESP',
          'TUR',
          'GBR',
          'USA',
        ];
        break;
      case 'FIVE EYES':
        results = ['AUS', 'CAN', 'GBR', 'NZL', 'USA'];
        break;
    }
  }

  return results;
};

/**
 * This will convert a ISO3166Alpha2 into a ISO3166Alpha3 is required.
 * @param value
 * @returns
 */
export const GetISO3166Alpha3FromISO3166Alpha2 = (value?: ISO_3166_1_ALPHA2): undefined | ISO_3166_1_ALPHA3 => {
  let result: undefined | ISO_3166_1_ALPHA3 = undefined;

  if (value) {
    switch (value) {
      case 'AL':
        result = 'ALB';
        break;
      case 'AU':
        result = 'AUS';
        break;
      case 'AT':
        result = 'AUT';
        break;
      case 'BE':
        result = 'BEL';
        break;
      case 'BG':
        result = 'BGR';
        break;
      case 'CA':
        result = 'CAN';
        break;
      case 'CY':
        result = 'CYP';
        break;
      case 'CZ':
        result = 'CZE';
        break;
      case 'DK':
        result = 'DNK';
        break;
      case 'HR':
        result = 'HRV';
        break;
      case 'EE':
        result = 'EST';
        break;
      case 'FI':
        result = 'FIN';
        break;
      case 'FR':
        result = 'FRA';
        break;
      case 'DE':
        result = 'DEU';
        break;
      case 'GB':
        result = 'GBR';
        break;
      case 'GR':
        result = 'GRC';
        break;
      case 'HU':
        result = 'HUN';
        break;
      case 'IE':
        result = 'IRL';
        break;
      case 'IT':
        result = 'ITA';
        break;
      case 'LV':
        result = 'LVA';
        break;
      case 'LT':
        result = 'LTU';
        break;
      case 'LU':
        result = 'LUX';
        break;
      case 'ME':
        result = 'MNE';
        break;
      case 'NL':
        result = 'NLD';
        break;
      case 'NZ':
        result = 'NZL';
        break;
      case 'NO':
        result = 'NOR';
        break;
      case 'PL':
        result = 'POL';
        break;
      case 'PT':
        result = 'PRT';
        break;
      case 'RO':
        result = 'ROU';
        break;
      case 'SK':
        result = 'SVK';
        break;
      case 'SI':
        result = 'SVN';
        break;
      case 'ES':
        result = 'ESP';
        break;
      case 'SE':
        result = 'SWE';
        break;
      case 'TR':
        result = 'TUR';
        break;
      case 'US':
        result = 'USA';
        break;
    }
  }

  return result;
};
