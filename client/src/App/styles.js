import { styled } from "@mui/material/styles"

const PREFIX = "App"
export const classes = {
	root: `${PREFIX}-root`,
	container: `${PREFIX}-container`,
}

export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {},
}))
