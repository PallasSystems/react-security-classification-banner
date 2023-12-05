import type { Meta, StoryObj } from '@storybook/react';

import { SecurityBanner } from './securitybanner.components';

const meta = {
  title: 'react-uk-classification-banner/Banner',
  component: SecurityBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const OFFICIAL: Story = { args: { classification: 'OFFICIAL' } };

export const OFFICIAL_SENSITIVE: Story = { args: { classification: 'OFFICIAL', descriptors: ['SENSITIVE'] } };

export const OFFICIAL_DESCRIPTORS: Story = {
  args: { classification: 'OFFICIAL', descriptors: ['HR / MANAGEMENT', 'PERSONAL DATA'] },
};

export const OFFICIAL_CODEWORDS: Story = {
  args: { classification: 'OFFICIAL', codeWords: ['EXAMPLE', '007'] },
};

export const SECRET: Story = { args: { classification: 'SECRET' } };

export const SECRET_CODEWORDS: Story = {
  args: { classification: 'SECRET', codeWords: ['EXAMPLE', '007'] },
};

export const TOP_SECRET: Story = { args: { classification: 'TOP SECRET' } };
