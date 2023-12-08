import React, { CSSProperties } from 'react';
import { Classification } from './classification.types';

const BannerStyle: CSSProperties = {
  color: 'rgb(255, 255, 255)',
  paddingBottom: '0.5em',
  paddingTop: '0.5em',
  textAlign: 'center',
  width: '100%',
};

const UnclassifiedStyle: CSSProperties = {
  backgroundColor: 'rgb(97,97,97)',
  ...BannerStyle,
};

const OfficialStyle: CSSProperties = {
  backgroundColor: 'rgb(43, 113, 199)',
  ...BannerStyle,
};

const SecretStyle: CSSProperties = {
  backgroundColor: 'rgb(243, 156, 44)',
  ...BannerStyle,
};

const TopSecretStyle: CSSProperties = {
  backgroundColor: 'rgb(170, 0, 0)',
  ...BannerStyle,
};

export const GetBannerStyle = (classification?: Classification, style?: CSSProperties): CSSProperties => {
  let result = UnclassifiedStyle;

  if (classification) {
    switch (classification) {
      case 'OFFICIAL':
        result = OfficialStyle;
        break;
      case 'SECRET':
        result = SecretStyle;
        break;
      case 'TOP SECRET':
        result = TopSecretStyle;
        break;
    }
  }

  return { ...result, ...style };
};

export const GetClassificationText = (classification?: Classification, descriptor?: string[]): string => {
  let result = 'NOT PROTECTIVELY MARKED';

  if (classification) {
    if ('OFFICIAL' === classification) {
      if (descriptor?.includes('SENSITIVE')) {
        result = 'OFFICIAL-SENSITIVE';
      } else {
        result = classification;
      }
    } else {
      result = classification;
    }
  }

  return result;
};
