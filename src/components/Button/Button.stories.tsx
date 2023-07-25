import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonVariants } from "./Button.types";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    label: "Hello, world!"
  }
};

export const PrimaryButton: Story = {
  args: {
    label: "Hello, world!"
  }
};

export const SecondaryButton: Story = {
  args: {
    label: "Hello, world!",
    variant: ButtonVariants.SECONDARY
  }
};

export const DashedButton: Story = {
  args: {
    label: "Hello, world!",
    variant: ButtonVariants.DASHED
  }
};

export const GhostButton: Story = {
  args: {
    label: "Hello, world!",
    variant: ButtonVariants.GHOST
  }
};

export const FullWidthButton: Story = {
  args: {
    label: "Hello, world!",
    isBlockLevel: true
  }
};
