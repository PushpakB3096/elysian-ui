import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import Input from "./Input";

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
  value: "Elysian UI Input",
  placeholder: "Enter some text here"
};
