import React, { FC, useMemo } from 'react';

import { SecurityBannerProps } from './securitybanner.types';
import { GetBannerStyle, GetClassificationText } from '../classification';
import { GetEyesOnly, GetOriginatingNation } from '../country';
import { GetDescriptorText } from '../descriptors';
import { GetHandlingInstructionsText } from '../handlingInstructions';

export const GetCodeWordText = (classification?: string, codewords?: string[]) => {
  let result = '';

  if (classification) {
    if (!classification?.startsWith('OFFICIAL')) {
      result = codewords?.join(' ') ?? '';
    }
  }

  return result;
};

export const SecurityBanner: FC<SecurityBannerProps> = ({
  classification,
  handlingInstruction,
  codeWords,
  descriptors,
  originatingEntity,
  nationalityCaveat,
  style,
}) => {
  const styles = useMemo(() => GetBannerStyle(classification, style), [classification, style]);
  // Classification text
  const classText = useMemo(() => GetClassificationText(classification, descriptors), [classification]);
  //
  const originating = useMemo(
    () => GetOriginatingNation(classification, originatingEntity),
    [originatingEntity, classification],
  );
  //
  const handlingText = useMemo(
    () => GetHandlingInstructionsText(classification, handlingInstruction),
    [descriptors, classification],
  );
  //
  const descriptorText = useMemo(() => GetDescriptorText(classification, descriptors), [descriptors, classification]);
  //
  const codeWordText = useMemo(() => GetCodeWordText(classification, codeWords), [codeWords, classification]);
  //
  const eyesOnlyText = useMemo(() => GetEyesOnly(classification, nationalityCaveat), [codeWords, classification]);
  //

  return (
    <div style={styles}>
      {originating.length > 0 ? <b>{originating} - </b> : null}
      <b>{classText}</b>
      {handlingText.length > 0 ? <b> - {handlingText}</b> : null}
      {descriptorText.length > 0 ? <b> - {descriptorText}</b> : null}
      {codeWordText.length > 0 ? <b> - {codeWordText}</b> : null}
      {eyesOnlyText.length > 0 ? <b> - {eyesOnlyText}</b> : null}
    </div>
  );
};
