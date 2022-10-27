import { styled } from "@mui/material/styles"

const PREFIX = "Dashboard"
export const classes = {
	root: `${PREFIX}-root`,
	paper: `${PREFIX}-paper`,
	title: `${PREFIX}-title`,
	grid: `${PREFIX}-grid`,
	card: `${PREFIX}-card`,
	cardMedia: `${PREFIX}-cardMedia`,
	cardTitle: `${PREFIX}-cardTitle`,
}

export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		alignItems: "flex-start",
		display: "flex",
		margin: "0 20px 8px 0",
	},
	[`& .${classes.paper}`]: {
		minWidth: 650,
		height: "100%",
		padding: 2,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	[`& .${classes.title}`]: {
		textAlign: "center",
		fontSize: 18,
		fontWeight: 600,
	},
	[`& .${classes.grid}`]: {},
	[`& .${classes.card}`]: {
		margin: "0 10px",
		textDecoration: "none",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	[`& .${classes.cardMedia}`]: {
		width: 140,
  		height: 140,
  		objectFit: "none",
		transition: "transform .2s",
		"&:hover": {
			transform: "scale(1.05)",
		},
	},
	[`& .${classes.cardTitle}`]: {
		textAlign: "center",
		fontSize: 16,
		fontWeight: 600,
	},
	[theme.breakpoints.down("1784")]: {
		[`&.${classes.root}`]: {
            margin: 0,
			marginBottom: 20,
		},
		[`& .${classes.paper}`]: {
            width: "100%",
		},
	},
	[theme.breakpoints.down("780")]: {
		[`& .${classes.paper}`]: {
			minWidth: "100%",
		},
	},
}))
