import { CSSProperties } from 'react';
import {
  GetBannerStyle,
  GetClassificationText,
  MergeClassifications,
  TopSecretStyle,
  UnclassifiedStyle,
} from './classification';
import { TOP_SECRET } from '../securitybanner/securitybanner.stories';

describe('GetBannerStyle', () => {
  test('NoParams', () => {
    expect(GetBannerStyle()).toEqual(UnclassifiedStyle);
  });

  test('Supplied Classification', () => {
    expect(GetBannerStyle('TOP SECRET')).toEqual(TopSecretStyle);
  });

  test('Supplied Classification And Style', () => {
    const supplied: CSSProperties = { marginTop: '1em' };
    const expected: CSSProperties = { ...TopSecretStyle, ...supplied };

    expect(GetBannerStyle('TOP SECRET', supplied)).toEqual(expected);
  });
});

describe('GetClassificationText', () => {
  test('NoParams', () => {
    expect(GetClassificationText()).toEqual('NOT PROTECTIVELY MARKED');
  });

  test('Different Classification', () => {
    expect(GetClassificationText('OFFICIAL')).toEqual('OFFICIAL');
    expect(GetClassificationText('SECRET')).toEqual('SECRET');
    expect(GetClassificationText('TOP SECRET')).toEqual('TOP SECRET');
  });

  test('Different Classifications non application descriptors', () => {
    const descriptors = ['LEGAL', 'PERONSAL'];

    expect(GetClassificationText('OFFICIAL', descriptors)).toEqual('OFFICIAL');
    expect(GetClassificationText('SECRET', descriptors)).toEqual('SECRET');
    expect(GetClassificationText('TOP SECRET', descriptors)).toEqual('TOP SECRET');
  });

  test('Different Classifications SENSITIVE descriptors', () => {
    const descriptors = ['LEGAL', 'PERONSAL', 'SENSITIVE'];

    expect(GetClassificationText('OFFICIAL', descriptors)).toEqual('OFFICIAL-SENSITIVE');
    expect(GetClassificationText('SECRET', descriptors)).toEqual('SECRET');
    expect(GetClassificationText('TOP SECRET', descriptors)).toEqual('TOP SECRET');
  });
});

describe('MergeClassifications', () => {
  test('NoParams', () => {
    expect(MergeClassifications()).toBeUndefined();
  });

  test('Original Only', () => {
    expect(MergeClassifications('OFFICIAL')).toEqual('OFFICIAL');
  });

  test('Have toMerge at Above with TS', () => {
    expect(MergeClassifications('OFFICIAL', 'TOP SECRET')).toEqual('TOP SECRET');
  });

  test('Have toMerge at Above with S', () => {
    expect(MergeClassifications('OFFICIAL', 'SECRET')).toEqual('SECRET');
  });

  test('Have toMerge at Above with TS and Undefined', () => {
    expect(MergeClassifications(undefined, 'TOP SECRET')).toEqual('TOP SECRET');
  });

  test('Have original at Above with TS', () => {
    expect(MergeClassifications('TOP SECRET', 'OFFICIAL')).toEqual('TOP SECRET');
  });

  test('Have toMerge at Above with S', () => {
    expect(MergeClassifications('SECRET', 'OFFICIAL')).toEqual('SECRET');
  });

  test('Have toMerge at Above with TS and Undefined', () => {
    expect(MergeClassifications('TOP SECRET', undefined)).toEqual('TOP SECRET');
  });
});
