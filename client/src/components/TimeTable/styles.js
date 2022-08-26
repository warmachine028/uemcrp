import { styled } from "@mui/material/styles"

const PREFIX = "TimeTable"

export const classes = {
	root: `${PREFIX}-root`,
	container: `${PREFIX}-container`,
}

export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {},
	[`& .${classes.container}`]: {
		width: "100%",
		selfAlign: "center",
		height: "fit-content",
	},
	[`& .MuiTableCell-head`]: {
		color: "white",
		backgroundColor: "black",
		textAlign: "center",
	},
	[`& .MuiTableBody-root .MuiTableRow-root`]: {
		"&:nth-of-type(odd)": {
			backgroundColor: "#ededed",
		},
	},
}))
