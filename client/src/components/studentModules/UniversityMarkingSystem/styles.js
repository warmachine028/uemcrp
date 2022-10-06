import { styled } from "@mui/material/styles"

const PREFIX = "UniversityMarkingSystem"

export const classes = {
	root: `${PREFIX}-root`,
	header: `${PREFIX}-header`,
	formControlGroup: `${PREFIX}-formControlGroup`,
	formControl: `${PREFIX}-formControl`,
	submitButton: `${PREFIX}-submitButton`,
	grid: `${PREFIX}-grid`,
}

export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		margin: " 20px 100px",
	},
	[`& .${classes.header}`]: {
		alignItems: "center",
		display: "flex",
		justifyContent: "space-between",
		paddingBottom: 20,
	},
	[`& .${classes.formControlGroup}`]: {
		display: "flex",
		alignItems: "center",
		gap: 30,
	},
	[`& .${classes.formControl}`]: {
		width: 300,
	},
	[`& .${classes.grid}`]: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
	},
	[theme.breakpoints.down("md")]: {
		[`&.${classes.root}`]: {
			margin: 20,
		},
	},
	[theme.breakpoints.down("sm")]: {
		[`&.${classes.root}`]: {
			margin: 20,
		},
		[`& .${classes.header}`]: {
			flexDirection: "column",
		},
		[`& .${classes.formControlGroup}`]: {
			flexDirection: "column-reverse",
			margin: 15,
		},
		[`& .${classes.submitButton}`]: {
			width: "100%",
		},
	},
}))
