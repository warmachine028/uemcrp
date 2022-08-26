import userLogo from "../../assets/persona.jpg"
import { Avatar, Typography, Card } from "@mui/material"
import * as React from "react"
import { styled } from "@mui/material/styles"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Table, TableBody, TableContainer, TableHead } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Link } from "react-router-dom"

const Actions = ({ title, image }) => {
	return (
		<Card
			sx={{ width: 200, margin: "0 10px" }}
			component={Link}
			to="/hell"
			style={{
				textDecoration: "none",
			}}
		>
			<CardMedia component="img" alt="green COMPONENT" height="140" image={image} style={{ objectFit: "contain" }} />
			<CardContent>
				<Typography
					gutterBottom
					variant="h7"
					component="div"
					textAlign="center"
					style={{
						textAlign: "center",
						fontSize: 16,
						fontWeight: 600,
					}}
				>
					{title}
				</Typography>
			</CardContent>
		</Card>
	)
}

const Home = () => {
	const user = {
		name: "Pritam Kundu",
		stream: "CSE",
		ip: "157.40.250.150",
	}
	return (
		<div className="Container" style={{ padding: 20 }}>
			<div style={{ display: "flex", marginBottom: 20 }}>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Avatar
						src={userLogo}
						style={{
							width: 250,
							height: "auto",
							margin: 20,
						}}
					/>
					<Typography style={{ fontSize: 30, fontWeight: 600 }}>{user.name}</Typography>
				</div>
				<Paper
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						padding: 20,
						width: "100%",
					}}
				>
					<Typography>Stream: CSE</Typography>
					<Typography>Section: A</Typography>
					<Typography>Roll Number: 40</Typography>
					<Typography>Enrollment Number: 120200090012201</Typography>
					<Typography>Registration Number: 304202000121231</Typography>
				</Paper>
			</div>
			<div className="bottom-container" style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
				<div
					className="dashboard"
					style={{
						alignItems: "flex-start",
						display: "flex",
						margin: "0px 20px 0 0",
					}}
				>
					<Paper
						sx={{
							p: 2,
							bgcolor: "background.default",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography
							style={{
								textAlign: "center",
								fontSize: 18,
								fontWeight: 600,
							}}
						>
							DASHBOARD
						</Typography>
						<div className="column1" style={{ display: "flex" }}>
							<Actions title="Change Password" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIy1Sf5Yvft7mWUx7uUL5uxHwN4CEBu5wshOPaM5E&s" />
							<Actions title="Admit Card" image="https://d29fhpw069ctt2.cloudfront.net/icon/image/120651/preview.svg" />
							<Actions title="Organisational Calander" image="https://d29fhpw069ctt2.cloudfront.net/icon/image/74145/preview.svg" />
						</div>
						<div className="column1" style={{ display: "flex", marginTop: 10 }}>
							<Actions title="Payment Details" image="https://d29fhpw069ctt2.cloudfront.net/icon/image/74135/preview.svg" />
							<Actions title="Pay Due Fees" image="https://d29fhpw069ctt2.cloudfront.net/icon/image/37817/preview.svg" />
							<Actions title="University Marking System" image="https://d29fhpw069ctt2.cloudfront.net/icon/image/74136/preview.svg" />
						</div>
						<div className="column1" style={{ display: "flex", marginTop: 10 }}>
							<Actions title="Update Info" image="https://d29fhpw069ctt2.cloudfront.net/icon/image/50314/preview.svg" />
							<Actions title="Unit Test Details" image="https://d29fhpw069ctt2.cloudfront.net/icon/image/120374/preview.svg" />
							<Actions title="Attendance" image="https://d29fhpw069ctt2.cloudfront.net/icon/image/81274/preview5.svg" />
						</div>
					</Paper>
				</div>
				<div
					className="timetable"
					style={{
						width: "100%",
					}}
				>
					<TimeTable />
					<Notices />
				</div>
			</div>
		</div>
	)
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}))

const periods = [
	{ day: "Monday", periods: ["SUBJECT 1", "SUBJECT 2", "SUBJECT 3", "", "SUBJECT 4", "SUBJECT 5", "SUBJECT 6"] },
	{ day: "Tuesday", periods: ["SUBJECT 1", "SUBJECT 2", "SUBJECT 3", "", "SUBJECT 4", "SUBJECT 5", "SUBJECT 6"] },
	{ day: "Wednesday", periods: ["SUBJECT 1", "SUBJECT 2", "SUBJECT 3", "", "SUBJECT 4", "SUBJECT 5", "SUBJECT 6"] },
	{ day: "Friday", periods: ["SUBJECT 1", "SUBJECT 2", "SUBJECT 3", "", "SUBJECT 4", "SUBJECT 5", "SUBJECT 6"] },
	{ day: "Saturday", periods: ["SUBJECT 1", "SUBJECT 2", "SUBJECT 3", "", "SUBJECT 4", "SUBJECT 5", "SUBJECT 6"] },
]

const Notices = () => {
	const notices = [
		"All face-to-face classes for students of all years will remain suspended from 16th March 2020 till 31st March 2020. All the students and stakeholders are requested to follow our website ( www.uem.edu.in) for any further notifications.",

		"Though face-to-face classes are suspended, the College/University will be delivering all teaching remotely from 16th March 2020 till 31st March 2020. College/University will be delivering all formal written examinations remotely or where it is not possible to deliver exams remotely they will be rescheduled. Online teaching methods can be accessed through www.uem.edu.in / www.iemcrp.com / www.iemlearning.com",

		"Hostels will remain open and operative. We advise students and their guardians not to encourage movement of the students out of hostels or travelling by train or by air. The foreign students are advised not to try to go to their home country as they may find acute problems in the airport, railway stations or at the border. In case they are quarantined, college/university authorities will be completely helpless in helping them out. Hence it is strongly advised that students should not move out.",

		"Also staying in hostels will help the students to access teaching resources, computing & lab resources, library, licensed software, high speed internet, etc.",
		"All teaching resources like computing & lab resources, library, licensed software, high speed internet, etc. will be available, but no mass gathering are encouraged.",
	]
	return (
		<Paper
			style={{
				marginTop: 20,
			}}
		>
			<Typography
				style={{
					textAlign: "center",
					fontSize: 18,
					fontWeight: 600,
				}}
			>
				NOTICES
			</Typography>
			{notices.map((notice, i) => (
				<div style={{ display: "flex", margin: "5px 5px" }}>
					<Typography fontSize="19px" padding="10px">
						{i + 1}.
					</Typography>
					<Typography fontSize="19px" padding="0 20px" textAlign="justify">
						{notice}
					</Typography>
				</div>
			))}
		</Paper>
	)
}

const TimeTable = () => {
	return (
		<TableContainer
			component={Paper}
			style={{
				maxWidth: 1200,
				selfAlign: "center",
				height: "fit-content",
			}}
		>
			<Typography
				style={{
					textAlign: "center",
					fontSize: 18,
					fontWeight: 600,
				}}
			>
				ACADEMIC TIME TABLE
			</Typography>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="center">Day</StyledTableCell>
						{[1, 2, 3].map(period => (
							<StyledTableCell align="center">{period}</StyledTableCell>
						))}
						<StyledTableCell align="center">BREAK</StyledTableCell>
						{[4, 5, 6].map(period => (
							<StyledTableCell align="center">{period}</StyledTableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{periods.map(row => (
						<StyledTableRow key={row.day}>
							<StyledTableCell component="th" scope="row">
								{row.day}
							</StyledTableCell>
							{row.periods.map(subject => (
								<StyledTableCell align="center">{subject}</StyledTableCell>
							))}
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default Home
