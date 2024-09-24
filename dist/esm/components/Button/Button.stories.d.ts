import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("./Button").ButtonProps>;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const WithOnClick: Story;
export declare const Disabled: Story;
