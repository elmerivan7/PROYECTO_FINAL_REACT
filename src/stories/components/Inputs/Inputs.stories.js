import React from "react";

import Inputs from "./Inputs";

export default {
  title: "Components/Inputs",
  component: Inputs,
  parameters: {
    actions: {
      handles: ["onchange"],
    },
  },
  argTypes: {},
};

const Template = (args) => <Inputs {...args} />;

export const Type = Template.bind({});
Type.args = {};
