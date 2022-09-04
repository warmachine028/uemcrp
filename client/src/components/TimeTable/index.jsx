import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Tooltip, Paper } from "@mui/material"
import timeTables from "../../data/timeTables"
import { Root, classes } from "./styles"

const TimeTable = ({ semester, stream, section }) => {
	const periods = timeTables[semester][stream.toLowerCase()][section]

	return (
		<Root className={classes.root}>
			<TableContainer className={classes.timeTable} component={Paper}>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCell>Day</TableCell>
							{[1, 2, 3].map((period, i) => (
								<TableCell key={i}>{period}</TableCell>
							))}
							<TableCell>BREAK</TableCell>
							{[4, 5, 6].map((period, i) => (
								<TableCell key={i}>{period}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{periods.map(subjects => (
							<TableRow key={subjects.day}>
								<TableCell component="th" scope="row">
									{subjects.day}
								</TableCell>
								{subjects.periods.slice(0, 3).map(subject => (
									<Tooltip title="Faculty Name" key={subject} placement="top-end" arrow>
										<TableCell key={subject} align="center">
											{subject}
										</TableCell>
									</Tooltip>
								))}
								<Tooltip title="Faculty Name" placement="top-end" arrow>
									<TableCell />
								</Tooltip>
								{subjects.periods.slice(4).map(subject => (
									<Tooltip title="Faculty Name" key={subject} placement="top-end" arrow>
										<TableCell key={subject} align="center">
											{subject}
										</TableCell>
									</Tooltip>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Root>
	)
}

export default TimeTable
