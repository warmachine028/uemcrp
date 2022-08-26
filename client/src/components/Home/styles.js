import { styled } from "@mui/material/styles"

const PREFIX = "Home"
export const classes = {
	root: `${PREFIX}-root`,
	container: `${PREFIX}-container`,
	topContainer: `${PREFIX}-topContainer`,
	iconContainer: `${PREFIX}-iconContainer`,
	avatar: `${PREFIX}-avatar`,
	iconTitle: `${PREFIX}-iconTitle`,
	info: `${PREFIX}-info`,
	bottomContainer: `${PREFIX}-bottomContainer`,
	paperTitle: `${PREFIX}-paperTitle`,
}

export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {},
	[`& .${classes.container}`]: {
		padding: 20,
	},
	[`& .${classes.topContainer}`]: {
		display: "flex",
		marginBottom: 20,
	},
	[`& .${classes.iconContainer}`]: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	[`& .${classes.avatar}`]: {
		width: 250,
		height: "auto",
		margin: 20,
	},
	[`& .${classes.iconTitle}`]: {
		fontSize: 30,
		fontWeight: 600,
	},
	[`& .${classes.info}`]: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: 20,
		width: "100%",
	},
	[`& .${classes.bottomContainer}`]: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
	},
	[`& .${classes.paperTitle}`]: {
		textAlign: "center",
		fontSize: 18,
		fontWeight: 600,
	},
	[theme.breakpoints.down("1784")]: {
		[`& .${classes.bottomContainer}`]: {
			flexDirection: "column",
		},
	},
	[theme.breakpoints.down("780")]: {
		"& .MuiDivider-root": {
			maxWidth: "100%",
		},
		[`& .${classes.topContainer}`]: {
			flexDirection: "column",
		},
		[`& .${classes.info}`]: {
			width: "auto",
		},
		[`& .${classes.bottomContainer}`]: {
			flexDirection: "column",
		},
	},
}))
