import React, { useState } from "react";
import CustomModal from "../Components/CustomModal";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

export default {
  title: "Components/CustomModal",
  component: CustomModal,
  argTypes: {
    padding: { control: "text" },
    margin: { control: "text" },
    display: { control: "text" },
  },
};

const Template = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <CustomModal {...args} open={open} handleClose={handleClose}>
        {args.children}
      </CustomModal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  padding: "16px",
  margin: "16px",
  display: "block",
  isDraggable: false,
  heading: "heading",
  body: "This is the modal content",
};
