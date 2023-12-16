import { GetISO3166Alpha3FromISO3166Alpha2, IsOrganisation } from './country.reference';
import type { ISO_3166_1_ALPHA2, ISO_3166_1_ALPHA3, Organisation } from './country.types';

export const GetOrgAndCountry = (value?: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2) => {
  let result: { org?: Organisation; country?: ISO_3166_1_ALPHA3 } = {};

  if (value) {
    if (IsOrganisation(value)) {
      result.org = value as Organisation;
    } else if (value.length === 3) {
      result.country = value as ISO_3166_1_ALPHA3;
    } else {
      result.country = GetISO3166Alpha3FromISO3166Alpha2(value as ISO_3166_1_ALPHA2);
    }
  }

  return result;
};

/**
 *
 * @param values
 * @returns
 */
export const GetOrgsAndCountries = (values?: Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[]) => {
  let result: { orgs: Organisation[]; countries: ISO_3166_1_ALPHA3[] } = { orgs: [], countries: [] };

  values?.forEach((value) => {
    const converted = GetOrgAndCountry(value);
    if (converted.country) {
      result.countries.push(converted.country);
    }

    if (converted.org) {
      result.orgs.push(converted.org);
    }
  });

  return result;
};

/**
 * Function is designed to merge 2 different handling nations, effectively this is looking for matching
 * results or one value only to have a result to return (since a document can only have a single handling
 * nation.
 *
 * @param original Organisation, Alpha3 ot Alpha 2 representing the handling entity of a record
 * @param toMerge Organisation, Alpha3 ot Alpha 2 representing the handling entity of a record
 * @return undefined if they can't be merged or a value if there is one or they match
 */
export const MergeHandlingNation = (
  original?: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2,
  toMerge?: Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2,
) => {
  const originalSep = GetOrgAndCountry(original);
  const toMergeSep = GetOrgAndCountry(toMerge);

  let result: undefined | Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2 = undefined;

  if (originalSep.country) {
    if (toMergeSep.country) {
      // if we have 2 countries which match we can return a Originating Entity
      result = originalSep.country === toMergeSep.country ? originalSep.country : undefined;
    } else if (!toMergeSep.org) {
      // if there is no organisation associated with the toMerge we can return the country
      // record from original.
      result = originalSep.country;
    }
  } else if (originalSep.org) {
    if (toMergeSep.org) {
      // if we have 2 orgs which match we can return a Originating Entity
      result = originalSep.org === toMergeSep.org ? originalSep.org : undefined;
    } else if (!toMergeSep.country) {
      // if there is no country associated with the toMerge we can return the org
      // record
      result = originalSep.org;
    }
  } else if (toMergeSep.country) {
    result = toMergeSep.country;
  } else if (toMergeSep.org) {
    result = toMergeSep.org;
  }

  return result;
};

/**
 * This will return the most restrictive nationality caveats between the 2 records.
 *
 * @param original Organisation, Alpha3 ot Alpha 2 representing the nationality caveat to be applied.
 * @param toMerge Organisation, Alpha3 ot Alpha 2 representing the nationality caveat to be applied.
 * @returns empty array if nothing is to be applied
 */
export const MergeNationalityCaveat = (
  original?: Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[],
  toMerge?: Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[],
) => {
  let results: Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[] = [];
  //
  const originalSep = GetOrgsAndCountries(original);
  const toMergeSep = GetOrgsAndCountries(toMerge);

  if (originalSep.countries.length > 0 || toMergeSep.countries.length > 0) {
    //
    if (originalSep.countries.length < toMergeSep.countries.length) {
      results = originalSep.countries;
    } else if (originalSep.countries.length === toMergeSep.countries.length) {
      results = originalSep.countries;
    } else {
      results = toMergeSep.countries;
    }
  } else if (originalSep.orgs.length > 0 || toMergeSep.orgs.length > 0) {
    //
    if (originalSep.orgs.length < toMergeSep.orgs.length) {
      results = originalSep.orgs;
    } else if (originalSep.orgs.length === toMergeSep.orgs.length) {
      results = originalSep.countries;
    } else {
      results = toMergeSep.orgs;
    }
  }

  return results;
};
