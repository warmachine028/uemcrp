import { styled } from "@mui/material/styles"

const PREFIX = "Bills"
export const classes = {
	root: `${PREFIX}-root`,
	header: `${PREFIX}-header`,
	// container: `${PREFIX}-container`,
	// paper: `${PREFIX}-paper`,
}
export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		margin: " 20px 100px",
	},
	[`& .${classes.header}`]: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		margin: "10px 0",
		alignItems: "center",
	},
}))
