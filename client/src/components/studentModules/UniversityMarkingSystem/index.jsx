import {classes, Root} from "./styles";

import {
	//
	FormControl,
	Typography,
	Card,
	CardContent,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from "@mui/material"

import Table from "./List"

const UniversityMarkingSystem = () => {

	const result = {
		"07023": {
			enrollment: 12020009001101,
			subject: "SPOS",
			marks: 86,
		},
		"00646": {
			enrollment: 12020009001101,
			subject: "TOC",
			marks: 94,
		},
		"15114": {
			enrollment: 12020009001101,
			subject: "CNS",
			marks: 66,
		},
		"15124": {
			enrollment: 12020009001102,
			subject: "DBMS",
			marks: 89,
		},
		"15134": {
			enrollment: 12020009001100,
			subject: "HCI",
			marks: 96,
		},
	}
	
	const userRes = Object.keys(result).reduce((res, resNo) => Object.assign(res, { [resNo]: result[resNo] }), {})

	
	return (
			<Root className={classes.root}>
				<div className={classes.header}>
					<Typography textAlign="center" variant="h5">
						Student Marks Display
					</Typography>
					<div>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel id="demo-simple-select-outlined-label">Semester</InputLabel>
						<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						label="Semeter"
						>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>Semester 1</MenuItem>
						<MenuItem value={2}>Semester 2</MenuItem>
						<MenuItem value={3}>Semester 3</MenuItem>
						<MenuItem value={4}>Semester 4</MenuItem>
						</Select>
					</FormControl>
						<Button variant="contained" className={classes.sbtbtn} color="primary">
							Submit
						</Button>
						</div>
				</div>

				<Card className={classes.cardroot}>
						<CardContent>
							<div className={classes.profileInfo}>
								<div className="titles">
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									Name:
								</Typography>
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									Exam Roll No.:
								</Typography>
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									Reg No.:
								</Typography>
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									Degree:
								</Typography>
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									Stream:
								</Typography>
								</div>
								<div className="details">
								<Typography className={classes.title} gutterBottom>
									SANGMESHWAR MAHAJAN
								</Typography>
								<Typography className={classes.title}  gutterBottom>
									SPPU74580023
								</Typography>
								<Typography className={classes.title} gutterBottom>
									PRN45552003
								</Typography>
								<Typography className={classes.title} gutterBottom>
									BE
								</Typography>
								<Typography className={classes.title} gutterBottom>
									COMP
								</Typography>
								</div>
							</div>
						</CardContent>
				</Card>
				
				<Table semester={1} scores={userRes} />
			</Root>
		)
}

export default UniversityMarkingSystem
