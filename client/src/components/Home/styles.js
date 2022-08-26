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
	dashboard: `${PREFIX}-dashboard`,
	dashboardPaper: `${PREFIX}-dashboardPaper`,
	dashboardContainer: `${PREFIX}-dashboardContainer`,
	paperTitle: `${PREFIX}-paperTitle`,
	timeTable: `${PREFIX}-timeTable`,
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
    [`& .${classes.dashboard}`]: {
		alignItems: "flex-start",
		display: "flex",
		margin: "0px 20px 8px 0",
	},
    [`& .${classes.dashboardPaper}`]: {
        minWidth: 650,
        height: '100%',
		padding: 2,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	[`& .${classes.timeTable}`]: {
		width: '100%',
		selfAlign: "center",
		height: "fit-content",
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
        [`& .${classes.dashboard}`]: {
            margin: 0,
            marginBottom: 20,
            
        },
        [`& .${classes.dashboardPaper}`]: {
            width: '100%'
        }
	},
	[theme.breakpoints.down("1066")]: {
		// [`& .${classes.appbar}`]: {
		// 	flexDirection: "column",
		// 	minHeight: 170,
		// },
		// [`& .${classes.brand}`]: {
		// 	flexDirection: "column",
		// },
	},
	[theme.breakpoints.down("780")]: {
		[`& .${classes.topContainer}`]: {
			flexDirection: "column",
		},
		[`& .${classes.info}`]: {
			width: "auto",
		},
		[`& .${classes.bottomContainer}`]: {
			// display: "none",
			flexDirection: "column",
		},
		// [`& .${classes.dashboard}`]: {
        // },
        [`& .${classes.dashboardPaper}`]: {
            minWidth: '100%'

        }

		// [`& .${classes.logo2}`]: {
		// 	display: "flex",
		// },
		// [`& .${classes.logo}`]: {
		// 	display: "none",
		// },
	},
}))
