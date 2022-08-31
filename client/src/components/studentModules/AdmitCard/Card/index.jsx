import { CardPaper, Container, classes } from "./styles"
import logo from "../../../../assets/logo.png"
import { Divider, Typography } from "@mui/material"

const words = {
	1: "First",
	2: "Second",
	3: "Third",
	4: "Fourth",
	5: "Fifth",
	6: "Sizth",
	7: "Seventh",
	8: "Eighth",
}

const Card = ({ user, sem, subjects }) => {
	const {
		course, //
		image,
		stream,
		name,
		guardian,
		registration,
		enrollment,
		section,
		roll,
	} = user
	const tenure = {
		start: 2020,
		end: 2021,
	}
	return (
		<CardPaper>
			<Container className={classes.root}>
				<Typography children={`${section}-${roll}`} style={{ position: "absolute", top: 97, left: 46, fontSize: 12 }} />
				<div className={classes.brandContainer}>
					<img src={logo} alt="logo" className={classes.icon} />
					<div className={classes.brand}>
						<Typography className={classes.brandName}>UNIVERSITY OF ENGINEERING & MANAGEMENT, KOLKATA</Typography>
						<Typography className={classes.address}>University Area, Plot No.III-B/5, New Town, Action Area - III, Kolkata - 700160</Typography>
					</div>
				</div>
				<Divider style={{ alignSelf: "center", width: "90%" }} />
				<div className={classes.mainContainer}>
					<Typography className={classes.title}>{`${course}(${stream}) ${words[sem]} Semester Examination ${tenure.start}-${tenure.end}`}</Typography>
					<Typography className={classes.title} children="ADMIT"/>
					<div className={classes.info}>
						<div>
							<Typography>Name of the Candidate: </Typography>
							<Typography>Father's / Guardian's Name: </Typography>
							<Typography>Registration Number: </Typography>
							<Typography>Enrollment No.: </Typography>
						</div>
						<div className={classes.details}>
							<Typography children={name} />
							<Typography children={guardian} style={{ fontWeight: 500 }} />
							<Typography children={registration} />
							<Typography children={enrollment} />
						</div>
						<img className={classes.userImage} src={image} alt="user-icon" />
					</div>
					<Typography children="Schedule of Regular Examination(Th. & Pr.)" className={classes.address} color="#393464" />
				</div>
				<Routine subjects={subjects} />
				<Typography className={classes.address} style={{ fontSize: 9, paddingTop: 10 }}>
					(Exam dates are subject to unavoidable Changes. Subjects Should not be altered under any circumstances)
				</Typography>
				<Typography className={classes.address} style={{ fontSize: 7, paddingTop: 30, fontWeight: 800 }}>
					DISCLAIMER: This is a computer Generated Document which has been generated from student login.
				</Typography>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
						padding: 50,
						alignItems: "center",
					}}
				>
					<Typography
						style={{
							fontSize: 7,
							paddingLeft: 10,
							textAlign: "left",
						}}
					>
						University of Engineering and Management, Kolkata
					</Typography>
					<div style={{ paddingRight: 10, textAlign: "right" }}>
						<Typography
							style={{
								fontSize: 9,
							}}
						>
							Controller of Examinations
						</Typography>
						<Typography
							className={classes.address}
							style={{
								fontSize: 7,
								width: "100%",
							}}
						>
							University of Engineering and Management Kolkata
						</Typography>
						<Typography
							style={{
								fontSize: 7,
								width: "100%",

								// paddingLeft: 10,
							}}
						>
							Downloaded on: 27-06-22
						</Typography>
					</div>
				</div>
			</Container>
		</CardPaper>
	)
}

const Routine = ({ subjects }) => {
	return (
		<table className={classes.table}>
			<thead className={classes.table}>
				<tr>
					<td>Paper Code</td>
					<td>Paper Name</td>
					<td>Exam Date</td>
					<td>Exam Time</td>
					<td>Invi. Sig.</td>
				</tr>
			</thead>
			<tbody>
				{subjects.map((subject, i) => (
					<tr key={i}>
						<td style={{ padding: subject.paperName.includes("Laboratory") && "10px 0" }}>{subject.paperCode}</td>
						<td>{subject.paperName}</td>
						<td>{subject.examDate}</td>
						<td>{subject.examTime}</td>
						<td></td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
export default Card
