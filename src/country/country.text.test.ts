import { GetNationalityCaveatText, GetOriginatingNationText } from './country.text';

describe('GetNationalityCaveatText', () => {
  test('NoParams', () => {
    expect(GetNationalityCaveatText()).toBeUndefined;
  });

  test('No Nation Supplied', () => {
    expect(GetNationalityCaveatText('SECRET')).toBeUndefined;
  });

  test('OFFICIAL with alpha 3 caveats', () => {
    expect(GetNationalityCaveatText('OFFICIAL', ['AUS', 'GBR', 'USA'])).toBeUndefined;
  });

  test('Classified with alpha 3 caveats', () => {
    expect(GetNationalityCaveatText('SECRET', ['AUS', 'GBR', 'USA'])).toEqual('AUS / UK / USA EYES ONLY');
  });
});

describe('GetOriginatingNationText', () => {
  test('NoParams', () => {
    expect(GetOriginatingNationText()).toBeUndefined;
  });

  test('No Nation Supplied', () => {
    expect(GetOriginatingNationText('SECRET')).toBeUndefined;
  });

  test('Classified with nation', () => {
    expect(GetOriginatingNationText('SECRET', 'GBR')).toEqual('UK');
    expect(GetOriginatingNationText('SECRET', 'AU')).toEqual('AUS');
  });

  test('No Classification with nation', () => {
    expect(GetOriginatingNationText(undefined, 'GBR')).toBeUndefined;
  });
});
