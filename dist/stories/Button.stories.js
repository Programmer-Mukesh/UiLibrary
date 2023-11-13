import CustomButton from "../Components/CustomButton";

export default {
  title: "Components/Button",
  component: CustomButton,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "blue",
  label: "Primary",
  size: "md",
  isLoading: false,
  color: "white",
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "red",
  label: "Secondary",
  size: "md",
  isLoading: false,
  color: "white",
};

export const Ghost = Template.bind({});
Ghost.args = {
  backgroundColor: "grey",
  label: "Ghost",
  size: "md",
  isLoading: false,
  color: "#dfdfdf",
};

export const Loading = Template.bind({});
Loading.args = {
  backgroundColor: "red",
  label: "Loading",
  size: "md",
  isLoading: true,
  color: "white",
};
