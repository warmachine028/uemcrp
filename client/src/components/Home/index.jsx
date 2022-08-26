import userLogo from "../../assets/persona.jpg"
import { Avatar, Typography, Card, Paper, Grid, Box, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material"
import { CardContent, CardMedia } from "@mui/material"
import { Link } from "react-router-dom"
import { Root, classes } from "./styles"
import { mockUser as user } from "../../data/users"

const DashboardAction = ({ title, image, goTo }) => {
	return (
		<Card
			sx={{
				width: "100%",
				margin: "0 10px",
				textDecoration: "none",
			}}
			component={Link}
			to={goTo}
		>
			<CardMedia component="img" alt="dashboard-component" image={image} style={{ objectFit: "contain", height: 140 }} />
			<CardContent>
				<Typography
					gutterBottom
					variant="h7"
					component="div"
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
	const data = {
		stream: user.stream,
		section: user.section,
		roll: user.roll,
		'studying in': `${Math.round(user.semester / 2)}rd Year, ${user.semester}th Semester`,
		enrollment: user.enrollment,
	}
	// Object.entries(data).map(([label, info], key) => console.log(info, key))
	return (
		<Root classname={classes.root}>
			<div className={classes.container}>
				<div className={classes.topContainer}>
					<div className={classes.iconContainer}>
						<Avatar className={classes.avatar} src={userLogo} />
						<Typography className={classes.iconTitle}>{user.name}</Typography>
					</div>
					<Paper className={classes.info}>
						{Object.entries(data).map(([label, info], key) => (
							<Box key={key}>
								<Typography color="black">
									<strong style={{ color: "black", textTransform:'capitalize' }}>{label}: </strong>
									{info}
								</Typography>
								<Divider style={{width: 400}} />
							</Box>
						))}
						<Box >
							<Typography color="black">
								<strong style={{ color: "black" }}>Registration: </strong>
								{data.enrollment}
							</Typography>
						</Box>
					</Paper>
				</div>
				<div className={classes.bottomContainer}>
					<Dashboard />
					<div>
						<Typography className={classes.paperTitle} backgroundColor="white">
							ACADEMIC TIME TABLE
						</Typography>
						<TimeTable />
						<Notices />
					</div>
				</div>
			</div>
		</Root>
	)
}
const DashboardItems = [
	{
		id: 0,
		title: "Change Password",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIy1Sf5Yvft7mWUx7uUL5uxHwN4CEBu5wshOPaM5E&s",
		link: "/changePassword",
	},
	{
		id: 1,
		title: "Admit Card",
		image: "https://d29fhpw069ctt2.cloudfront.net/icon/image/120651/preview.svg",
		link: "/admitCard",
	},
	{
		id: 2,
		title: "Organisational Calander",
		image: "https://d29fhpw069ctt2.cloudfront.net/icon/image/74145/preview.svg",
		link: "/organisationalCalendar",
	},
	{
		id: 3,
		title: "Payment Details",
		image: "https://d29fhpw069ctt2.cloudfront.net/icon/image/74135/preview.svg",
		link: "/paymentDetails",
	},
	{
		id: 4,
		title: "Pay Due Fees",
		image: "https://d29fhpw069ctt2.cloudfront.net/icon/image/37817/preview.svg",
		link: "/payDueFees",
	},
	{
		id: 5,
		title: "University Marking System",
		image: "https://d29fhpw069ctt2.cloudfront.net/icon/image/74136/preview.svg",
		link: "/markingSystem",
	},
	{
		id: 6,
		title: "Update Info",
		image: "https://d29fhpw069ctt2.cloudfront.net/icon/image/50314/preview.svg",
		link: "/updateInfo",
	},
	{
		id: 7,
		title: "Unit Test Details",
		image: "https://d29fhpw069ctt2.cloudfront.net/icon/image/120374/preview.svg",
		link: "/payDueFees",
	},
	{
		id: 8,
		title: "Attendance",
		image: "https://d29fhpw069ctt2.cloudfront.net/icon/image/81274/preview5.svg",
		link: "/attendance",
	},
]
const Dashboard = () => {
	return (
		<div className={classes.dashboard}>
			<Paper className={classes.dashboardPaper}>
				<Typography className={classes.paperTitle}>DASHBOARD</Typography>
				<Grid container className={classes.dashboardContainer}>
					{DashboardItems.map(({ id, title, image, link }) => (
						<Grid item xs={12} sm={6} md={3} lg={4} key={id}>
							<DashboardAction title={title} image={image} goTo={link} />
						</Grid>
					))}
				</Grid>
			</Paper>
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
const notices = [
	"All face-to-face classes for students of all years will remain suspended from 16th March 2020 till 31st March 2020. All the students and stakeholders are requested to follow our website ( www.uem.edu.in) for any further notifications.",
	"Though face-to-face classes are suspended, the College/University will be delivering all teaching remotely from 16th March 2020 till 31st March 2020. College/University will be delivering all formal written examinations remotely or where it is not possible to deliver exams remotely they will be rescheduled. Online teaching methods can be accessed through www.uem.edu.in / www.iemcrp.com / www.iemlearning.com",
	"Hostels will remain open and operative. We advise students and their guardians not to encourage movement of the students out of hostels or travelling by train or by air. The foreign students are advised not to try to go to their home country as they may find acute problems in the airport, railway stations or at the border. In case they are quarantined, college/university authorities will be completely helpless in helping them out. Hence it is strongly advised that students should not move out.",
	"Also staying in hostels will help the students to access teaching resources, computing & lab resources, library, licensed software, high speed internet, etc.",
	"All teaching resources like computing & lab resources, library, licensed software, high speed internet, etc. will be available, but no mass gathering are encouraged.",
]
const Notices = () => {
	return (
		<Paper style={{ marginTop: "20px" }}>
			<Typography className={classes.paperTitle}>NOTICES</Typography>
			{notices.map((notice, i) => (
				<div style={{ display: "flex", margin: 5 }} key={i}>
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
		<TableContainer className={classes.timeTable} component={Paper}>
			<Table sx={{}} aria-label="customized table">
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
