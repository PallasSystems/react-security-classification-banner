import { GetDescriptorText, MergeDescriptors } from './descriptors';
import { Descriptors, OfficialDescriptors } from './descriptors.types';

describe('GetClassificationText', () => {
  test('NoParams', () => {
    expect(GetDescriptorText()).toEqual('');
  });

  test('ClassificationNoDescriptors', () => {
    expect(GetDescriptorText('OFFICIAL')).toEqual('');
    expect(GetDescriptorText('SECRET')).toEqual('');
    expect(GetDescriptorText('SECRET')).toEqual('');
  });

  test('OfficialClassificationWithDescriptors', () => {
    const descriptors: OfficialDescriptors[] = ['LEGAL', 'HR / MANAGEMENT', 'PERSONAL DATA'];
    expect(GetDescriptorText('OFFICIAL', descriptors)).toEqual('LEGAL HR / MANAGEMENT PERSONAL DATA');
  });

  test('SecretClassificationNoDescriptors', () => {
    const descriptors: Descriptors[] = ['LEGAL PROFESSIONAL PRIVILEGE', 'MARKET SENSITIVE'];
    expect(GetDescriptorText('SECRET', descriptors)).toEqual('LEGAL PROFESSIONAL PRIVILEGE MARKET SENSITIVE');
  });
});

describe('MergeDescriptors', () => {
  test('NoParams', () => {
    expect(MergeDescriptors()).toEqual([]);
  });

  test('Only Original With Duplicates', () => {
    expect(MergeDescriptors(['COMMERCIAL', 'COMMERCIAL'])).toEqual(['COMMERCIAL']);
  });

  test('Only ToMerge With Duplicates', () => {
    expect(MergeDescriptors(undefined, ['COMMERCIAL', 'COMMERCIAL'])).toEqual(['COMMERCIAL']);
  });

  test('Duplicates', () => {
    expect(MergeDescriptors(['COMMERCIAL', 'COMMERCIAL'], ['HR / MANAGEMENT', 'HR / MANAGEMENT'])).toEqual([
      'COMMERCIAL',
      'HR / MANAGEMENT',
    ]);
  });
});
