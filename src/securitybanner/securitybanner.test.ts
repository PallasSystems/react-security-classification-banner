import { SECRET } from './securitybanner.stories';
import { GetCodeWordText, GetUpToText, I18nUpToText } from './securitybanner.utils';

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

  test('One Record With UpTO', () => {
    expect(GetUpToText([{ classification: 'OFFICIAL' }], true)).toEqual(I18nUpToText());
  });

  test('One Record With UpTO', () => {
    expect(GetUpToText([{ classification: 'OFFICIAL' }], false)).toEqual('');
  });
});

describe('GetCodeWordText', () => {
  test('NoParams', () => {
    expect(GetCodeWordText()).toEqual('');
  });

  test('Incorrect classification with Codewords', () => {
    expect(GetCodeWordText(undefined, ['code', 'word'])).toEqual('');
  });

  test('Incorrect classification with Codewords', () => {
    expect(GetCodeWordText('OFFICIAL', ['code', 'word'])).toEqual('');
  });

  test('Correct classification with Codewords', () => {
    expect(GetCodeWordText('SECRET', ['code', 'word'])).toEqual('code word');
  });

  test('Correct classification with undefined Codewords', () => {
    expect(GetCodeWordText('SECRET')).toEqual('');
  });
});
