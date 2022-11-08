import React from "react";

import Buttons from "./Buttons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Buttons",
  component: Buttons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    onClick: { action: "click" },
    type: {
      options: [0, 1, 2, 3],
      control: {
        type: "select",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Buttons {...args} />;

export const Type0 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type0.args = {
  type: 0,
};
export const Type1 = Template.bind({});
Type1.args = {
  type: 1,
};
export const Type2 = Template.bind({});
Type2.args = {
  type: 2,
};
export const Type3 = Template.bind({});
Type3.args = {
  type: 3,
};
