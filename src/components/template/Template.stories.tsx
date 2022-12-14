import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Template as Component } from './Template';
import { theme } from '../../constant/theme';
import { MantineProvider } from '@mantine/core';
export default {
  title: 'Template',
  component: Component,
  argTypes: {
    number: {
      control: { type: 'number', defaultValue: 1 },
    },
  },
} as ComponentMeta<typeof Component>;

const Story: ComponentStory<typeof Component> = (args) => (
  <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
    <Component {...args} />
  </MantineProvider>
);

export const Default = Story.bind({});

Default.args = {};
