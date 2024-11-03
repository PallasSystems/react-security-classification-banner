import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],
  framework: '@storybook/react-webpack5',
  docs: {
    defaultName: 'Documentation'
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {}, // Available only when reactDocgen is set to 'react-docgen-typescript'
    skipCompiler: false,
  },
};
export default config;
