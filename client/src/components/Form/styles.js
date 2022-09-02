import { styled } from "@mui/material/styles"

const PREFIX = "Form"

export const classes = {
	root: `${PREFIX}-root`,
	paper: `${PREFIX}-paper`,
	avatar: `${PREFIX}-avatar`,
	form: `${PREFIX}-form`,
}

export const Root = styled("div")(({ theme }) => ({
	[`& .${classes.paper}`]: {
		marginTop: 100, //
		flexDirection: "column",
		alignItems: "center",
		display: "flex",
		padding: "20px 0",
	},
	[`& .${classes.avatar}`]: {
		marginBottom: 10,
		backgroundColor: "#393464",
	},
	[`& .${classes.form}`]: {
		width: 360,
	},
	[theme.breakpoints.down(400)]: {
		[`& .${classes.form}`]: {
			width: 320,
		},
	},
	[theme.breakpoints.down(370)]: {
		[`& .${classes.form}`]: {
			width: 300,
		},
	},
}))
