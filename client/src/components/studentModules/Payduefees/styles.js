import { styled } from "@mui/material/styles"

const PREFIX = "Payduefees"

export const classes = {
	root: `${PREFIX}-root`,
	
}

export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		margin: " 20px 100px",
	},
	[`& .MuiTableCell-head`]: {
		color: "white",
		backgroundColor: "#383562",
		textAlign: "center",
		fontWeight: "bold",
	},
}))