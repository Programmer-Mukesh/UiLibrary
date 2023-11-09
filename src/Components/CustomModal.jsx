import React from "react";
import { Box, Modal, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const StyledPaper = styled(Paper)`
//   position: absolute;
//   top: ${(props) => props.top}px;
//   left: ${(props) => props.left}px;
//   transform: translate(-50%, -50%);
//   padding: ${padding || "16px"};
//   margin: ${margin || "0"};
//   display: ${display || "block"};
//   cursor: ${isDraggable ? "grabbing" : "grab"};
// `;

const CustomModal = ({
  open,
  handleClose,
  padding,
  margin,
  display,
  isDraggable,
  heading,
  body,
  ...props
}) => {
  return (
    // <Modal open={open} onClose={handleClose}>
    //   <StyledPaper padding={padding} margin={margin} display={display} {...props}>
    //     {children}
    //   </StyledPaper>
    // </Modal>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} draggable>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {heading}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {body}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
