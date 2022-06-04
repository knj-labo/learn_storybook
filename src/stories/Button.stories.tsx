import React from 'react';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  is_primary: true,
  label: 'Button',
};
Primary.play = async ({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
Secondary.play = async ({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
Large.play = async ({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
Small.play = async ({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};
