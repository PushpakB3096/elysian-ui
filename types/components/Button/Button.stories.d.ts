/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("./Button").ButtonProps>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultButton: Story;
export declare const PrimaryButton: Story;
export declare const SecondaryButton: Story;
export declare const GhostButton: Story;
export declare const FullWidthButton: Story;
