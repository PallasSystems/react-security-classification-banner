import React, { CSSProperties } from 'react';
import { Classification } from './classification.types';

const BannerStyle: CSSProperties = {
  color: 'rgb(255, 255, 255)',
  paddingBottom: '0.5em',
  paddingTop: '0.5em',
  textAlign: 'center',
  width: '100%',
};

export const UnclassifiedStyle: CSSProperties = {
  backgroundColor: 'rgb(97,97,97)',
  ...BannerStyle,
};

export const OfficialStyle: CSSProperties = {
  backgroundColor: 'rgb(43, 113, 199)',
  ...BannerStyle,
};

export const SecretStyle: CSSProperties = {
  backgroundColor: 'rgb(243, 156, 44)',
  ...BannerStyle,
};

export const TopSecretStyle: CSSProperties = {
  backgroundColor: 'rgb(170, 0, 0)',
  ...BannerStyle,
};

/**
 * Retrieves the correct styling information for the security banner based on the Classification supplied.
 *
 * @param classification The security classification level of the banner
 * @param style additional style elements to add to the banner.
 * @returns  unclassified style by default unless a different security classification level.
 */
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

/**
 * The Security Classification text, 'SENSITIVE' descriptor modifies the classification string for the 'OFFICIAL' label.
 *
 * @param classification the security classification level
 * @param descriptor the descriptors in the banner, (e.g. its looking for 'SENSITIVE')
 * @returns 'NOT PROTECTIVELY MARKED' is the default response level.
 */
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
