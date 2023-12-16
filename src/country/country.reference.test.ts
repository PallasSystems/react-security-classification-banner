import {
  GetISO3166Alpha3,
  GetISO3166Alpha3FromISO3166Alpha2,
  GetISO3166Alpha3FromOrganisation,
  IsOrganisation,
  IsUK,
} from './country.reference';

describe('IsUK', () => {
  test('Valid Values', () => {
    expect(IsUK('GB')).toBeTruthy();
    expect(IsUK('GBR')).toBeTruthy();
    expect(IsUK('UK')).toBeTruthy();
  });

  test('Invalid Values', () => {
    expect(IsUK('POL')).toBeFalsy();
    expect(IsUK('AU')).toBeFalsy();
    expect(IsUK('FIVE EYES')).toBeFalsy();
  });
});

describe('IsOrganisation', () => {
  test('Valid Values', () => {
    expect(IsOrganisation('EU')).toBeTruthy();
    expect(IsOrganisation('NATO')).toBeTruthy();
    expect(IsOrganisation('FIVE EYES')).toBeTruthy();
  });

  test('Invalid Values', () => {
    expect(IsOrganisation('GBR')).toBeFalsy();
    expect(IsOrganisation('AU')).toBeFalsy();
    expect(IsOrganisation('POL')).toBeFalsy();
  });
});

describe('GetISO3166Alpha3', () => {
  test('NoParams', () => {
    expect(GetISO3166Alpha3()).toBeUndefined;
  });

  test('Test UK', () => {
    expect(GetISO3166Alpha3('UK')).toEqual(['GBR']);
    expect(GetISO3166Alpha3('GB')).toEqual(['GBR']);
    expect(GetISO3166Alpha3('GBR')).toEqual(['GBR']);
  });

  test('Test Valid Alpha2', () => {
    expect(GetISO3166Alpha3('AU')).toEqual(['AUS']);
    expect(GetISO3166Alpha3('EE')).toEqual(['EST']);
  });

  test('Test Valid Alpha3', () => {
    expect(GetISO3166Alpha3('NLD')).toEqual(['NLD']);
    expect(GetISO3166Alpha3('POL')).toEqual(['POL']);
    expect(GetISO3166Alpha3('DNK')).toEqual(['DNK']);
  });

  test('Test Valid Org', () => {
    expect(GetISO3166Alpha3('FIVE EYES')).toEqual(['AUS', 'CAN', 'GBR', 'NZL', 'USA']);
  });
});

describe('GetISO3166Alpha3FromOrganisation', () => {
  test('NoParams', () => {
    expect(GetISO3166Alpha3FromOrganisation()).toBeUndefined;
  });
});

describe('GetISO3166Alpha3FromISO3166Alpha2', () => {
  test('NoParams', () => {
    expect(GetISO3166Alpha3FromISO3166Alpha2()).toBeUndefined;
  });

  test('Test Valid Alpha2', () => {
    expect(GetISO3166Alpha3FromISO3166Alpha2('AU')).toEqual('AUS');
    expect(GetISO3166Alpha3FromISO3166Alpha2('EE')).toEqual('EST');
  });
});
