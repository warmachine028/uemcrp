import { styled } from "@mui/material/styles"

const PREFIX = "ChangePassword"

export const classes = {
	root: `${PREFIX}-root`,
	submit: `${PREFIX}-submit`,
}

export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		marginTop: 200,
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
}))
