import React from "react";
import { useArgs } from "@storybook/client-api";
import Input from "./Input";
import { InputSizes } from "./Input.types";
import type { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"]
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryFn<typeof Input>;

export const DefaultInput: Story = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <Input
      {...args}
      value={args.value}
      onChange={(e) => {
        updateArgs({ ...args, value: e.target.value });
      }}
    />
  );
};

DefaultInput.args = {
  placeholder: "Default Input"
};

export const LargeInput: Story = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <Input
      {...args}
      value={args.value}
      onChange={(e) => {
        updateArgs({ ...args, value: e.target.value });
      }}
    />
  );
};

LargeInput.args = {
  placeholder: "Large Input",
  boxSize: InputSizes.LARGE
};

export const SmallInput: Story = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <Input
      {...args}
      value={args.value}
      onChange={(e) => {
        updateArgs({ ...args, value: e.target.value });
      }}
    />
  );
};

SmallInput.args = {
  placeholder: "Small Input",
  boxSize: InputSizes.SMALL
};

export const DisabledInput: Story = (args) => {
  return <Input {...args} />;
};

DisabledInput.args = {
  placeholder: "Disabled Input",
  isDisabled: true
};
