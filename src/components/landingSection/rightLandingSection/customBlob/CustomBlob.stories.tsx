import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomBlob as Component } from './CustomBlob';
import { theme } from '../../../../constant/theme';
import { MantineProvider } from '@mantine/core';
export default {
  title: 'CustomBlob',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Story: ComponentStory<typeof Component> = (args) => (
  <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
    <Component {...args} />
  </MantineProvider>
);

export const Default = Story.bind({});

Default.args = {};
