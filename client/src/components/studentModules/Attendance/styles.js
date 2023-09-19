import { styled } from "@mui/material/styles";

const PREFIX = "Attendance";
export const classes = {
  root: `${PREFIX}-root`,
  submit: `${PREFIX}-submit`,
  container: `${PREFIX}-container`,
  paper: `${PREFIX}-paper`,
};
export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    "& .MuiFormHelperText-root": {
      margin: "3px 0",
    },
  },
  [`& .${classes.submit}`]: {
    margin: "10px 0",
    color: "white",
    backgroundColor: "#393464",
    "&:hover": { backgroundColor: "#564f95" },
  },
  [`& .${classes.container}`]: {
    height: "100%",
    maxWidth: "100%",
    marginTop: 100, //
    width: 900,
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [`& .${classes.paper}`]: {
    maxWidth: "fit-content",
    padding: "10px 100px",
    marginTop: 15,
  },
}));
