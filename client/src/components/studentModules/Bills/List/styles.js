import { styled } from "@mui/material/styles"

const PREFIX = "List"
export const classes = {
	root: `${PREFIX}-root`,
	header: `${PREFIX}-header`,
	// container: `${PREFIX}-container`,
	// paper: `${PREFIX}-paper`,
}
export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		// margin: " 20px 100px",
	},

	[`& .MuiTableCell-head`]: {
		color: "white",
		backgroundColor: "#383562",
		textAlign: "center",
		fontWeight: "bold",
	},
}))
