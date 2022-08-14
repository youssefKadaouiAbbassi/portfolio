import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfoSection as Component } from './InfoSection';
import { theme } from '../../../../constant/theme';
import { MantineProvider } from '@mantine/core';
export default {
  title: 'InfoSection',
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
