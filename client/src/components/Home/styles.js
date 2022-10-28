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
	avatarContainer: `${PREFIX}-avatarContainer`,
	photoChange: `${PREFIX}-photoChange`,
	cameraIcon: `${PREFIX}-cameraIcon`,
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
		opacity: 1,
		display: "block",
		transition: ".5s ease"
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
	[`& .${classes.avatarContainer}`]: {
		position: "relative",
		"&:hover": { 
			[`& .${classes.avatar}`]: {
				opacity: 0.6,
			},
			[`& .${classes.photoChange}`]:{
				opacity:1,
			}
		}
	},
	[`& .${classes.photoChange}`]: {
		transition: ".5s ease",
  		opacity: 0,
 		position: "absolute",
  		top: "50%",
  		left: "50%",
  		transform: "translate(-50%, -50%)",
	},
	[`& .${classes.cameraIcon}`]: {
		width: 100,
		filter: "brightness(0) invert(1)",
		cursor: "pointer",
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
