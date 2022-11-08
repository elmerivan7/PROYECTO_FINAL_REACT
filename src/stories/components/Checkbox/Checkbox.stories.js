import React from "react";

import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    actions: {
      handles: ["onchange"],
    },
  },
  argTypes: {},
};

const Template = (args) => <Checkbox {...args} />;

export const Type = Template.bind({});
Type.args = {};
