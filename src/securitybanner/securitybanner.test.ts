import { SecurityClassification } from './securitybanner.types';
import {
  GetCodeWordText,
  GetSecurityClassification,
  GetUpToText,
  I18nUpToText,
  MergeCodeWords,
} from './securitybanner.utils';

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

describe('MergeCodeWords', () => {
  test('NoParams', () => {
    expect(MergeCodeWords()).toEqual([]);
  });

  test('Original undefined toMerge', () => {
    expect(MergeCodeWords(['original'])).toEqual(['original']);
  });

  test('Original empty toMerge', () => {
    expect(MergeCodeWords(['original'], [])).toEqual(['original']);
  });

  test('toMerge undefined Original', () => {
    expect(MergeCodeWords(undefined, ['toMerge'])).toEqual(['toMerge']);
  });

  test('toMerge empty Original', () => {
    expect(MergeCodeWords([], ['toMerge'])).toEqual(['toMerge']);
  });

  test('valid Original & valid toMerge', () => {
    expect(MergeCodeWords(['original'], ['toMerge'])).toEqual(['original', 'toMerge']);
  });

  test('valid Original & valid toMerge with duplicate', () => {
    expect(MergeCodeWords(['original', 'duplicate'], ['toMerge', 'duplicate'])).toEqual([
      'original',
      'duplicate',
      'toMerge',
    ]);
  });
});

describe('GetSecurityClassification', () => {
  test('Empty object', () => {
    expect(GetSecurityClassification({})).toEqual({});
  });
  test('Empty Array', () => {
    expect(GetSecurityClassification([])).toEqual({});
  });

  test('Complex Array', () => {
    const scWithCodeWords: SecurityClassification = { classification: 'SECRET', codeWords: ['CODEWORDS', 'EXAMPLE'] };
    const tsWithCodeWords: SecurityClassification = {
      classification: 'TOP SECRET',
      codeWords: ['WORDSCODE', 'EXAMPLE'],
      nationalityCaveat: ['GBR'],
    };

    const expected: SecurityClassification = {
      classification: 'TOP SECRET',
      codeWords: ['CODEWORDS', 'EXAMPLE', 'WORDSCODE'],
      descriptors: [],
      nationalityCaveat: ['GBR'],
      originatingEntity: undefined,
    };

    expect(GetSecurityClassification([scWithCodeWords, tsWithCodeWords])).toEqual(expected);
  });
});
