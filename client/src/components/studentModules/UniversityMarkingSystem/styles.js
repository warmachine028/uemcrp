import { styled } from "@mui/material/styles";

const PREFIX = "Result";

export const classes = {
  root: `${PREFIX}-root`,
  header: `${PREFIX}-header`,
  formControl: `${PREFIX}-formControl`,
  cardroot: `${PREFIX}-cardroot`,
  title: `${PREFIX}-title`,
  pos: `${PREFIX}-pos`,
  selectEmpty: `${PREFIX}-selectEmpty`,
  sbtbtn: `${PREFIX}-sbtbtn`,
  profileInfo: `${PREFIX}-profileInfo`,
  datePickersContainer: `${PREFIX}-datePickersContainer`,
  searchInput: `${PREFIX}-searchInput`,
  // container: `${PREFIX}-container`,
  // paper: `${PREFIX}-paper`,
};


export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    margin: " 20px 100px",
  },
  [`& .${classes.cardroot}`]: {
    width: "100%",
    margin: "10px auto",
    display: "block",
		overflow: "hidden",
    padding: "10px 0px"
  },
  [`& .${classes.title}`]: {
    fontSize: 14,
  },
  [`& .${classes.pos}`]: {
    marginBottom: 12,
  },

  [`& .${classes.sbtbtn}`]: {
    marginTop: "17px",
    marginLeft: "10px",
  },
  
  [`& .${classes.profileInfo}`]: {
   display: "flex",
   justifyContent: "space-between"
  },
  

  [`& .${classes.formControl}`]: {
    margin: theme.spacing(1),
    minWidth: 250,
    marginLeft: 25
  },

  [`& .${classes.selectEmpty}`]: {
    marginTop: theme.spacing(2),
  },
  [`& .${classes.header}`]: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: "10px 0",
    alignItems: "center",
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
