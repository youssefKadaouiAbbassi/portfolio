import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfoSection as Component } from './InfoSection';
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
  <Component {...args} />
);

export const Default = Story.bind({});

Default.args = {};
