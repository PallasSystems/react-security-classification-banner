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
});
