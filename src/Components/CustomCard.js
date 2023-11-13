import { LoadingButton } from "@mui/lab";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Paper,
} from "@mui/material";
import PropTypes from "prop-types";

const paperStyles = {
  maxWidth: "fit-content",
  margin: "0px",
  padding: "0px",
};

function CustomCard({
  header,
  body,
  display,
  margin,
  padding,
  variant,
  footer,
}) {
  return (
    <Paper
      elevation={variant === "flat" ? 0 : 3}
      sx={
        variant === "flat"
          ? { border: "1px solid black", ...paperStyles }
          : paperStyles
      }
    >
      <Card style={{ padding, margin, display }} variant="">
        <CardHeader title={header} />
        <CardContent>{body}</CardContent>
        <CardActions>{footer}</CardActions>
      </Card>
    </Paper>
  );
}

// CustomCard.propTypes = {
//   label: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   handleClick: PropTypes.func,
//   color: PropTypes.string,
//   isLoading: PropTypes.bool,
// };

export default CustomCard;
