import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import SaveIcon from '@mui/icons-material/Save';

function CustomButton({
  label,
  backgroundColor = "red",
  size = "md",
  handleClick,
  color,
  isLoading,
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    color: color,
    fontWeight: "bold",
  };

  return isLoading ? (
    <LoadingButton
      loading
      sx={style}
      loadingPosition="start"
      startIcon={<SaveIcon />}
      variant="outlined"
    >
      {label}
    </LoadingButton>
  ) : (
    <Button onClick={handleClick} sx={style} disabled={label === "Ghost"}>
      {label}
    </Button>
  );
}

CustomButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default CustomButton;
