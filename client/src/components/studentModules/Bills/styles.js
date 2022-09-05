import { styled } from "@mui/material/styles";

const PREFIX = "Bills";
export const classes = {
  root: `${PREFIX}-root`,
  header: `${PREFIX}-header`,
  datePickersContainer: `${PREFIX}-datePickersContainer`,
  searchInput: `${PREFIX}-searchInput`,
  // container: `${PREFIX}-container`,
  // paper: `${PREFIX}-paper`,
};
export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    margin: " 20px 100px",
  },
  [`& .${classes.header}`]: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: "10px 0",
    alignItems: "center",
  },
  [`& .${classes.searchInput}`]: {
    width: "300px",
  },
  [theme.breakpoints.down(1200)]: {
    [`& .${classes.header}`]: {
      flexWrap: "wrap",
      [`& h5`]: {
        width: "100%",
        marginBottom: ".7rem",
      },
    },
  },
  [theme.breakpoints.down(1024)]: {
    [`& .${classes.header}`]: {
      flexDirection: "column",
      width: "fit-content",
      margin: "10px auto",
    },
    [`& .${classes.datePickersContainer}`]: {
      marginBottom: ".7rem",
    },
  },
  [theme.breakpoints.down(769)]: {
    [`& .${classes.datePickersContainer}`]: {
      flexDirection: "column",
      alignSelf: "stretch",
      gridGap: ".7rem",
      [`& > div`]: { margin: 0 },
    },
  },
  [theme.breakpoints.down(480)]: {
    [`&.${classes.root}`]: {
      margin: " 20px 50px",
    },
    [`& .${classes.header}`]: {
      width: "100%",
    },
    [`& .${classes.searchInput}`]: { alignSelf: "stretch", width: "auto" },
  },
}));
