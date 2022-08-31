// import userLogo from "../../assets/persona.jpg"
import { Avatar, Typography, Paper, Box, Divider } from "@mui/material"
import { Root, classes } from "./styles"
import { students } from "../../data/users"
import notices from "../../data/notices"
import Dashboard from "../Dashboard"
import TimeTable from "../TimeTable"


const Home = () => {
	const user = students[0]
	const data = {
		stream: user.stream,
		section: user.section,
		roll: user.roll,
		"studying in": `${Math.round(user.semester / 2)}rd Year, ${user.semester}th Semester`,
		enrollment: user.enrollment,
		name: user.name
	}

	return (
		<Root classname={classes.root}>
			<div className={classes.container}>
				<div className={classes.topContainer}>
					<div className={classes.iconContainer}>
						<Avatar className={classes.avatar} src={user.image} />
						<Typography className={classes.iconTitle}>{data.name}</Typography>
					</div>
					<Paper className={classes.info}>
						{Object.entries(data).map(([label, info], key) => (
							<Box key={key}>
								<Typography color="black">
									<strong style={{ color: "black", textTransform: "capitalize" }}>{label}: </strong>
									{info}
								</Typography>
								<Divider style={{ width: 400 }} />
							</Box>
						))}
						<Box>
							<Typography color="black">
								<strong style={{ color: "black" }}>Registration: </strong>
								{user.registration}
							</Typography>
						</Box>
					</Paper>
				</div>
				<div className={classes.bottomContainer}>
					<Dashboard type="student" />
					<div>
						<Typography className={classes.paperTitle} backgroundColor="white">
							ACADEMIC TIME TABLE
						</Typography>
						<TimeTable semester={user.semester} stream={user.stream} section={user.section} />
						<Notices />
					</div>
				</div>
			</div>
		</Root>
	)
}

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

export default Home
