import { styled } from "@mui/material/styles"

const PREFIX = "Payduefees"

export const classes = {
	root: `${PREFIX}-root`,
	note: `${PREFIX}-note`,
	grid: `${PREFIX}-grid`,
	table: `${PREFIX}-table`,
	cell: `${PREFIX}-cell`,
	button: `${PREFIX}-button`,
	data: `${PREFIX}-data`
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
		[`& .${classes.cell}`]: {
			padding: "2px",
		},
		[`&.${classes.root}`]: {
			margin: " 20px 50px",
		},
	},
	[theme.breakpoints.down(480)]:{
		[`& .${classes.button}`]: {
			padding: "2px",
			fontSize: ".8em",
		},
		[`& .MuiTableCell-head`]: {
			padding: "2px",
		},
		[`&.${classes.root}`]: {
			margin: " 20px 10px",
		},

		[`& .${classes.note}`]: {
		},
		[`& .MuiTableCell-root`]: {
			fontSize: ".70rem",
			padding: "0px"
		},
		
	},
	
}))