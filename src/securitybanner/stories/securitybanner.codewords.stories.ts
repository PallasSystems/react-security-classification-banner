import type { Meta, StoryObj } from '@storybook/react';

import { SecurityBanner } from '../securitybanner.components';

const meta = {
  title: 'react-uk-classification-banner/Banner',
  component: SecurityBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OFFICIAL_CODEWORDS: Story = {
  args: { records: { classification: 'OFFICIAL', codeWords: ['EXAMPLE', '007'] } },
};

export const SECRET_CODEWORDS: Story = {
  args: { records: { classification: 'SECRET', codeWords: ['EXAMPLE', '007'] } },
};

export const TOP_SECRET_CODEWORDS: Story = {
  args: { records: { classification: 'TOP SECRET', codeWords: ['EXAMPLE', '007'] } },
};