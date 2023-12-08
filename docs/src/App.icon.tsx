import React, { ReactNode } from 'react';
import { ShieldLock } from 'react-bootstrap-icons';
import type { IconProps } from 'react-bootstrap-icons';

export const getRBTIcon = (value?: IconProps): ReactNode => {
  return <ShieldLock {...value} />;
};
