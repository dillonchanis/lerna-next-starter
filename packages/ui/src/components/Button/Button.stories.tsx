import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";

import { Button } from "./Button";

const story = {
  title: "Button",
  component: Button,
};

export default story;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);
export const BasicButton = Template.bind({});
BasicButton.args = {
  children: "Click Me",
};
