import type { Meta, StoryObj } from '@storybook/react';

import { SecurityBanner } from '../securitybanner.components';

const meta = {
  title: 'react-uk-classification-banner/Banner',
  component: SecurityBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { records: [] } };