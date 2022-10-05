import { styled } from "@mui/material/styles"

const PREFIX = "ResultTable"
export const classes = {
	root: `${PREFIX}-root`,
	header: `${PREFIX}-header`,
	// container: `${PREFIX}-container`,
	tablestl: `${PREFIX}-tablestl`,
}
export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
	    width: "550px",
		margin: "10px auto",
		display: "block",
		overflow: "hidden"
	},

	[`& .MuiTableCell-head`]: {
		color: "white",
		backgroundColor: "#383562",
		textAlign: "center",
		fontWeight: "bold",
	},
}))
