import { styled } from "@mui/material/styles"

const PREFIX = "Ratings"
export const classes = {
	root: `${PREFIX}-root`,
	ratingContainer: `${PREFIX}-ratingContainer`,
}
export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	},
	[`& .${classes.ratingContainer}`]: {
		display: "flex",
		padding: "0 23px",
		width: "-webkit-fill-available",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
}))
