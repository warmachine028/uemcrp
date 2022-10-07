import { styled } from "@mui/material/styles"

const PREFIX = "List"
export const classes = {
	root: `${PREFIX}-root`,
	header: `${PREFIX}-header`,
}
export const Root = styled("div")(({ theme }) => ({
	[`& .MuiTableCell-head`]: {
		color: "white",
		backgroundColor: "#383562",
		textAlign: "center",
		fontWeight: "bold",
	},
}))
