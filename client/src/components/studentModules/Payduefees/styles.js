import { styled } from "@mui/material/styles"

const PREFIX = "Payduefees"

export const classes = {
	root: `${PREFIX}-root`,
	note: `${PREFIX}-note`,
	grid: `${PREFIX}-grid`,
	table: `${PREFIX}-table`,
	cell: `${PREFIX}-cell`,
	button: `${PREFIX}-button`,
	data: `${PREFIX}-data`,
}

export const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		margin: " 20px 100px",
		textAlign: "center",
	},
	[`& .${classes.note}`]: {
		padding: 20,
		margin: "20px 0",
		textAlign: "left",
	},
	[`& .${classes.grid}`]: {
		gap: 10,
		justifyContent: "space-between",
	},
	[`& .${classes.table}`]: {
		minWidth: 650,
	},
	[`& .${classes.cell}`]: {
		fontWeight: "bold",
	},
	[`& .${classes.button}`]: {
		margin: "0 10px",
	},
	[`& .${classes.data}`]: {
		minWidth: 650,
	},
	[`& .MuiTableCell-head`]: {
		color: "white",
		backgroundColor: "#383562",
		textAlign: "center",
		fontWeight: "bold",
	},
	[theme.breakpoints.down("sm")]: {
		[`&.${classes.root}`]: {
			// display: "none",
		},
	},
	[theme.breakpoints.down(1024)]: {
		[`& .${classes.data}`]: {
			width: "fit-content",
		},
	},
}))