import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from '../List';

export default {
  title: 'Shared/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = () => <List />;

export const Demo = Template.bind({});
Demo.args = {};
