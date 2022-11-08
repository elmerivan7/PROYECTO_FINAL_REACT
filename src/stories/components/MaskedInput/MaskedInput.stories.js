import React from "react";

import MaskedInput from "./MaskedInput";

export default {
  title: "Components/MaskedInput",
  component: MaskedInput,
  parameters: {
    actions: {
      handles: ["onchange"],
    },
  },
  argTypes: {},
};

const Template = (args) => <MaskedInput {...args} />;

export const Type = Template.bind({});
Type.args = {};
