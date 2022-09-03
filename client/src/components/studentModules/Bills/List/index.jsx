import * as React from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material"
import { Root, classes } from "./styles"
import moment from "moment"

const BasicTable = ({ startDate, endDate, bills }) => {
	const filteredBills = Object.keys(bills)
		.filter(billNo => {
			const stDate = moment(startDate).format("DD-MM-YYYY")
			const edDate = moment(endDate).format("DD-MM-YYYY")
			const curDate = moment().format("DD-MM-YYYY")
			if (stDate === edDate && edDate === curDate) {
				return true
			}
			return startDate < moment(bills[billNo].date) && moment(bills[billNo].date) < endDate
		})
		.reduce((bill, billNo) => Object.assign(bill, { [billNo]: bills[billNo] }), {})

	return (
		<Root className={classes.root}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>Bill No.</TableCell>
							<TableCell>Bill Total</TableCell>
							<TableCell>Bill Date</TableCell>
							<TableCell>Status</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{Object.entries(filteredBills).map(([billNo, { total, date }]) => (
							<TableRow key={billNo}>
								<TableCell component="th" scope="row">
									{billNo}
								</TableCell>
								<TableCell align="left">{total}</TableCell>
								<TableCell align="left">{moment(date).format("Do MMMM YYYY, dddd, h:mm A")}</TableCell>
								<TableCell align="center">
									<Button>Click for Bill Details</Button>
								</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell />
							<TableCell />
							<TableCell align="center" style={{ fontWeight: "bold" }}>
								Total no. of Bills Found: {Object.keys(filteredBills).length}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Root>
	)
}

export default BasicTable
