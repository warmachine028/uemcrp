import { styled } from "@mui/material/styles"

const PREFIX = "CustomDateRange"
export const classes = {
	root: `${PREFIX}-root`,
	calendarWrapper: `${PREFIX}-calendarWrapper`
}
export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
        margin: " 20px 100px",
    },
	[`& .${classes.calendarWrapper}`]: {
		margin: "20px",
		display: "flex",
		justifyContent: "center",
	},
}))