import { GetHandlingInstructionsText } from './handlingInstructions';

describe('GetBannerStyle', () => {
  test('NoParams', () => {
    expect(GetHandlingInstructionsText()).toEqual('');
  });

  test('ClassificationNoHandling', () => {
    expect(GetHandlingInstructionsText('SECRET')).toEqual('');
  });

  test('OfficalClassificationWithOfficialHandling', () => {
    expect(GetHandlingInstructionsText('OFFICIAL', 'FOR PUBLIC RELEASE')).toEqual('FOR PUBLIC RELEASE');
  });

  test('AboveOfficalClassificationWithOfficialHandling', () => {
    expect(GetHandlingInstructionsText('SECRET', 'FOR PUBLIC RELEASE')).toEqual('');
  });

  test('AboveOfficalClassificationWithAboveOfficialHandling', () => {
    expect(GetHandlingInstructionsText('SECRET', 'HMG USE ONLY')).toEqual('HMG USE ONLY');
  });

  test('TSClassificationWithTSHandling', () => {
    expect(GetHandlingInstructionsText('TOP SECRET', 'RECIPIENTS ONLY')).toEqual('RECIPIENTS ONLY');
  });
});
