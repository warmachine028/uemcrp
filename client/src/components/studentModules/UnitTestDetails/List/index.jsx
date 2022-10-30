import * as React from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import { Root, classes } from "./styles"

const BasicTable = ({ sem, ut, result }) => {
	
	return (
		<Root className={classes.root}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>Subject Code</TableCell>
							<TableCell>Subject Name</TableCell>
							<TableCell>Subject Type</TableCell>
							<TableCell>Exam Year and Month</TableCell>
							<TableCell>Full Mark</TableCell>
							<TableCell>Mark Obtain</TableCell>
							<TableCell>Remark</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{result.map((res,index) => (
						<TableRow key={index}>
							<TableCell>{res.subjectCode}</TableCell>
							<TableCell>{res.subjectName}</TableCell>
							<TableCell>{res.subjectType}</TableCell>
							<TableCell>{res.testTime}</TableCell>
							<TableCell>{res.fullMark}</TableCell>
							<TableCell>{res.markObtain}</TableCell>
							<TableCell>{res.remark}</TableCell>
						</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Root>
	)
}

export default BasicTable
