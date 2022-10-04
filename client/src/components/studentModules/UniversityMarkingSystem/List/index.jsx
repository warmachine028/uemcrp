import * as React from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import { Root, classes } from "./styles"

const BasicTable = ({ semester, scores }) => {

	return (
		<Root className={classes.root}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 550 }}>
					<TableHead>
						<TableRow>
							<TableCell>Sr No.</TableCell>
							<TableCell>Subject</TableCell>
							<TableCell>Marks</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{Object.entries(scores).map(([srno, { subject, marks }], key) => (
							<TableRow key={srno}>
								<TableCell component="th" scope="row" align="center">
									{key+1}
								</TableCell>
								<TableCell align="center">{subject}</TableCell>
								<TableCell align="center">{marks}</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell />
							<TableCell />
							{/* <TableCell align="center" style={{ fontWeight: "bold" }}>
								Total no. of sub Found: {Object.keys(filteredBills).length}
							</TableCell> */}
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			</Root>
	)
}

export default BasicTable
