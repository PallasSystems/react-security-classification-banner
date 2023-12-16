import React, { FC, useMemo } from 'react';

import { GetBannerStyle, GetClassificationText } from '../classification';
import { GetNationalityCaveatText, GetOriginatingNationText } from '../country';
import { GetDescriptorText } from '../descriptors';
import { GetHandlingInstructionsText } from '../handlingInstructions';

import type { SecurityBannerProps } from './securitybanner.types';
import { GetCodeWordText, GetSecurityClassification, GetUpToText } from './securitybanner.utils';

export const SecurityBanner: FC<SecurityBannerProps> = ({ records, style, upTo }) => {
  // convert an array into a single record
  const record = useMemo(() => GetSecurityClassification(records), [records]);
  // Retrieve
  const styles = useMemo(() => GetBannerStyle(record.classification, style), [record.classification, style]);
  // Classification text
  const classText = useMemo(
    () => GetClassificationText(record.classification, record.descriptors),
    [record.classification],
  );
  //
  const originating = useMemo(
    () => GetOriginatingNationText(record.classification, record.originatingEntity),
    [record.originatingEntity, record.classification],
  );
  //
  const handlingText = useMemo(
    () => GetHandlingInstructionsText(record.classification, record.handlingInstruction),
    [record.descriptors, record.classification],
  );
  //
  const descriptorText = useMemo(
    () => GetDescriptorText(record.classification, record.descriptors),
    [record.descriptors, record.classification],
  );
  //
  const codeWordText = useMemo(
    () => GetCodeWordText(record.classification, record.codeWords),
    [record.codeWords, record.classification],
  );
  //
  const eyesOnlyText = useMemo(
    () => GetNationalityCaveatText(record.classification, record.nationalityCaveat),
    [record.codeWords, record.classification],
  );
  // Process the supplied data to work out if we should have an UPTO Label on the banner
  const upToText = useMemo(() => GetUpToText(records, upTo), [records, upTo]);

  return (
    <div style={styles}>
      {upToText.length > 0 ? <b>{upToText} </b> : null}
      {originating.length > 0 ? <b>{originating} - </b> : null}
      <b>{classText}</b>
      {handlingText.length > 0 ? <b> - {handlingText}</b> : null}
      {descriptorText.length > 0 ? <b> - {descriptorText}</b> : null}
      {codeWordText.length > 0 ? <b> - {codeWordText}</b> : null}
      {eyesOnlyText.length > 0 ? <b> - {eyesOnlyText}</b> : null}
    </div>
  );
};
