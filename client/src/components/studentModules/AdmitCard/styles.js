import { styled } from "@mui/material/styles"

const PREFIX = "AdmitCard"
export const classes = {
	root: `${PREFIX}-root`,
	title: `${PREFIX}-title`,
	mainContainer: `${PREFIX}-mainContainer`,
	tabs: `${PREFIX}-tabs`,
	tabPannel: `${PREFIX}-tabPannel`,
}

export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		width: "auto",
		margin: 20,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	[`& .${classes.title}`]: {
		textAlign: "center",
		textTransform: "uppercase",
		fontWeight: 500,
		fontSize: 22,
		textDecoration: "underline",
	},
	[`& .${classes.mainContainer}`]: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		// overflow: 'scroll',
		width: "100%",
	},
	"& .MuiTabs-flexContainer": {
		justifyContent: "flex-start",
	},
	[theme.breakpoints.down("1000")]: {
		[`&.${classes.root}`]: {},
		[`& .${classes.mainContainer}`]: {
			width: "100vw",
		},
		[`& .${classes.tabs}`]: {
			width: "-webkit-fill-available",
		},
		[`& .${classes.tabPannel}`]: {
			width: "calc(100vw - 50px)",
		},
		"& .MuiTabs-flexContainer": {
			justifyContent: "flex-start",
		},
	},
	[theme.breakpoints.down("680")]: {
		"& .MuiTabs-flexContainer": {
			justifyContent: "flex-start",
		},
	}
}))
