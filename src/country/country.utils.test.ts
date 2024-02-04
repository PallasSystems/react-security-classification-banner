import { MergeHandlingNation, MergeNationalityCaveat } from './country.utils';

describe('MergeHandlingNation', () => {
  test('NoParams', () => {
    expect(MergeHandlingNation()).toBeUndefined;
  });
});

describe('MergeNationalityCaveat', () => {
  test('NoParams', () => {
    expect(MergeNationalityCaveat()).toBeUndefined;
  });

  test('Only Original Country', () => {
    expect(MergeNationalityCaveat(['GBR'])).toEqual(['GBR']);
  });

  test('Multi original Countries, single toMerge  Country', () => {
    expect(MergeNationalityCaveat(['AUS', 'GBR'], ['GBR'])).toEqual(['GBR']);
  });

  test('Only toMerge Country', () => {
    expect(MergeNationalityCaveat([], ['NATO'])).toEqual(['NATO']);
  });

  test('Only Original Organisation', () => {
    expect(MergeNationalityCaveat(['NATO'])).toEqual(['NATO']);
  });

  test('Multi original Organisations, single toMerge Organisation', () => {
    expect(MergeNationalityCaveat(['EU', 'NATO'], ['NATO'])).toEqual(['NATO']);
  });

  test('Only toMerge Organisation', () => {
    expect(MergeNationalityCaveat([], ['NATO'])).toEqual(['NATO']);
  });
});
