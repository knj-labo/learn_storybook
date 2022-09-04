import React from 'react';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Button } from '../Button';

export default {
  title: 'Shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const 応募する= Template.bind({});

応募する.args = {
  color: "blue",
  children: <>応募する</>,
};

応募する.play = async ({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};

export const 削除する = Template.bind({});
削除する.args = {
    color: "red",
    children: <>削除する</>,
};
削除する.play = async ({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};

export const クリックできない削除する　= Template.bind({});
クリックできない削除する.args = {
  color: "red",
  children: <>削除する</>,
  is_disabled: true
};
クリックできない削除する.play = async ({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};
