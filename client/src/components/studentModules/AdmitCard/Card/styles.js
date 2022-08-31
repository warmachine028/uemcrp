import styled from "@emotion/styled"
import Paper, { paperClasses } from "@mui/material/Paper"

const PREFIX = "Card"
const primary = "#393464"
const primaryLight = "#3853d1"

export const classes = {
	root: `${PREFIX}-root`,
	brandContainer: `${PREFIX}-brandContainer`,
	icon: `${PREFIX}-icon`,
	brand: `${PREFIX}-brand`,
	brandName: `${PREFIX}-brandName`,
	address: `${PREFIX}-address`,
	mainContainer: `${PREFIX}-mainContainer`,
	title: `${PREFIX}-title`,
	info: `${PREFIX}-info`,
	labels: `${PREFIX}-labels`,
	details: `${PREFIX}-details`,
	userImage: `${PREFIX}-userImage`,
	table: `${PREFIX}-table`,
}

export const CardPaper = styled(Paper)(({ theme }) => ({
	[`&.${paperClasses.root}`]: {
		position: "relative",
		width: "21cm",
		height: "29.7cm",
		display: "flex",
		justifyContent: "center",
		margin: 10,
	},
}))

export const Container = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		margin: "30mm 12mm 53mm",
		border: "double 5px black",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor:"pink",
	},
	[`& .${classes.brandContainer}`]: {
		display: "flex",
		alignItems: "center",
		margin: 10,
		justifyContent: "center",
		 //width:"100%"
	},
	[`& .${classes.icon}`]: {
		width: 80,
		marginRight: 20,
	},
	[`& .${classes.brand}`]: {
		display: "flex",
		flexDirection: "column",
		color: primary,
		alignItems: "center",
	},
	[`& .${classes.brandName}`]: {
		fontWeight: 600,
		fontSize: 17,
	},
	[`& .${classes.address}`]: {
		fontSize: 12,
	},
	[`& .${classes.mainContainer}`]: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
        padding: "5px 60px",
        
	},
	[`& .${classes.title}`]: {
		margin: "13px 0px 0px",
		fontSize: 12,
		fontWeight: 600,
	},
	[`& .${classes.info}`]: {
		width: "100%",
		padding: "10px 85px",
		"& .MuiTypography-root": {
			fontSize: 12,
			fontWeight: 500,
		},
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	[`& .${classes.details}`]: {
		textTransform: "upperCase",
		"& .MuiTypography-root": {
			fontWeight: 600,
			color: primaryLight,
		},
	},
	[`& .${classes.userImage}`]: {
		width: 120,
		height: 134,
	},
	[`& .${classes.table}`]: {
		// width: "100%",
		margin: "0 40px",
		border: "1px solid black",
		td: {
			border: "1px solid black",
		},
		thead: {
			fontWeight: 700,
			fontSize: 11,
			textAlign: "center",
		},
		tbody: {
			fontSize: 9,
		},
	},
	
	
}))
