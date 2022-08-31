import { styled } from "@mui/material/styles"

const PREFIX = "AdmitCard"
export const classes = {
	root: `${PREFIX}-root`,
	title: `${PREFIX}-title`,
	mainContainer: `${PREFIX}-mainContainer`,
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
        width: '100%',
	},
	[theme.breakpoints.down("780")]:{
		[`& .${classes.mainContainer}`]: {
			margin:"auto",
			width:"auto",
						
		},
		[`&.${classes.root}`]: {
		width:850,
		margin:"auto",
		}
	}
}))

