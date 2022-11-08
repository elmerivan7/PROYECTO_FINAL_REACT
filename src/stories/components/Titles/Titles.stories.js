import React from "react";

import Titles from "./Titles";

export default {
  title: "Components/Titles",
  component: Titles,
  parameters: {
    actions: {
      handles: ["onchange"],
    },
  },
  argTypes: {},
};

const Template = (args) => <Titles {...args} />;

export const Type = Template.bind({});
Type.args = {};
