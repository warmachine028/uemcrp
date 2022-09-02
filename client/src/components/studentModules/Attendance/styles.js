import { styled } from "@mui/material/styles"

const PREFIX = "Attendance"
export const classes = {
	root: `${PREFIX}-root`,
	submit: `${PREFIX}-submit`,
}
export const Root = styled("div")(({ theme }) => ({
	[`& .${classes.submit}`]: {
		margin: "10px 0",
		color: "white",
		backgroundColor: "#393464",
		"&:hover": { backgroundColor: "#564f95" },
	},
}))
