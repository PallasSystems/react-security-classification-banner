import { GetUpToText, I18nUpToText } from './securitybanner.utils';

describe('GetUpToText', () => {
  test('NoParams', () => {
    expect(GetUpToText([])).toEqual('');
  });

  test('One Record Only', () => {
    expect(GetUpToText([{ classification: 'OFFICIAL' }])).toEqual('');
  });

  test('Multiple Records', () => {
    expect(GetUpToText([{ classification: 'OFFICIAL' }, { classification: 'OFFICIAL' }])).toEqual(I18nUpToText());
  });
});
