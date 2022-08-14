import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RightLandingSection as Component } from './RightLandingSection';
import { theme } from '../../../constant/theme';
import { MantineProvider } from '@mantine/core';
export default {
  title: 'RightLandingSection',
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
