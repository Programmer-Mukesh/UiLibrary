import React from "react";
import CustomCard from "../Components/CustomCard";

export default {
  title: "Components/CustomCard",
  component: CustomCard,
  argTypes: {
    variant: {
      control: { type: "select", options: ["elevated", "flat"] },
    },
    padding: { control: "text" },
    margin: { control: "text" },
    display: { control: "text" },
  },
};

const Template = (args) => <CustomCard {...args} />;

export const Elevated = Template.bind({});
Elevated.args = {
  variant: "elevated",
  padding: "16px",
  margin: "16px",
  display: "inline-block",
  body: "This is the body",
  footer: "This is the footer",
  header: "Heading ",
};

export const Flat = Template.bind({});
Flat.args = {
  variant: "flat",
  padding: "16px",
  margin: "16px",
  display: "inline-block",
  body: "This is the body",
  footer: "This is the footer",
  header: "Heading ",
};
