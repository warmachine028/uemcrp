import { classes, Root } from "./styles"
import { FormControl, Typography, InputLabel, Select, MenuItem, Button, Paper, Grid } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const UniversityMarkingSystem = ({ user }) => {
	const navigate = useNavigate()
	const [semester, setSemester] = useState(1)
	const parameters = {
		performance: "Good",
		cumCGPA: 9.42,
		rank: 73,
		highestCGPA: 9.84,
		lowestCGPA: 9.31,
	}

	return (
		<Root className={classes.root}>
			<div className={classes.header}>
				<Typography textAlign="center" variant="h5">
					Student Semester Marksheet
				</Typography>
				<div className={classes.formControlGroup}>
					<Button variant="contained" onClick={() => navigate(`/marksheet/${semester}`)} className={classes.submitButton}>
						DISPLAY MARKSHEET
					</Button>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel>Semester</InputLabel>
						<Select label="Semeter" value={semester} onChange={e => setSemester(e.target.value)}>
							{[...Array(user.semester - 1).keys()].map(i => (
								<MenuItem key={i} value={i + 1}>{`Semester ${i + 1}`}</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</div>

			<Paper style={{ padding: 20 }}>
				<Grid container>
					<Grid item xs={12} lg={6} className={classes.grid}>
						<Typography fontSize="17px" gutterBottom>
							<strong>Name:</strong> {user.name}
						</Typography>
						<Typography fontSize="17px" gutterBottom>
							<strong>Exam Roll No.:</strong> {user.registration}
						</Typography>
						<Typography fontSize="17px" gutterBottom>
							<strong>Registration No.:</strong> {user.registration}
						</Typography>
						<Typography fontSize="17px" gutterBottom>
							<strong>Degree:</strong> {user.course}
						</Typography>
						<Typography fontSize="17px" gutterBottom>
							<strong>Stream:</strong> {user.stream}
						</Typography>
					</Grid>
					<Grid item xs={12} lg={6} className={classes.grid}>
						<Typography fontSize="17px" gutterBottom>
							<strong>Overall Performance:</strong> {parameters.performance}
						</Typography>
						<Typography fontSize="17px" gutterBottom>
							<strong>Cumulative CGPA till Now</strong> {parameters.cumCGPA}
						</Typography>
						<Typography fontSize="17px" gutterBottom>
							<strong>Rank:</strong> {parameters.rank}
						</Typography>
						<Typography fontSize="17px" gutterBottom>
							<strong>Highest CGPA till Now:</strong> {parameters.highestCGPA}
						</Typography>
						<Typography fontSize="17px" gutterBottom>
							<strong>Lowest CGPA till Now:</strong> {parameters.lowestCGPA}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Root>
	)
}

export default UniversityMarkingSystem
