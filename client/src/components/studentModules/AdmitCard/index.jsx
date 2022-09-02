const AdmitCard = () => {
	return <div>AdmitCard</div>
}

export default AdmitCard


// import { Root, classes } from "./styles"
// import { Tabs, Typography, Tab, Box, Button } from "@mui/material"
// import SwipeableViews from "react-swipeable-views-react-18-fix"
// import { useTheme } from "@mui/material/styles"
// import { useState } from "react"
// import Card from "./Card"
// import subjects from "../../../data/subjects.js"

// const TabPanel = ({ children, value, index, ...other }) => (
// 	<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
// 		{value === index && <Box>{children}</Box>}
// 	</div>
// )

// const AdmitCard = ({ user }) => {
// 	const theme = useTheme()
// 	const [value, setValue] = useState(0)
// 	const currentSemester = user.semester - 1
// 	const semesters = [...Array(currentSemester).keys()]
// 	return (
// 		<Root className={classes.root}>
// 			<Typography className={classes.title} children="admit cards" />
// 			<div className={classes.mainContainer}>
// 				<Tabs value={value} onChange={(_, newValue) => setValue(newValue)} aria-label="basic tabs">
// 					{semesters.map(sem => (
// 						<Tab label={`SEMESTER ${sem + 1}`} key={sem} />
// 					))}
// 				</Tabs>
// 				<SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={index => setValue(index)}>
// 					{semesters.map(sem => (
// 						<TabPanel value={value} index={sem} dir={theme.direction} key={sem}>
// 							<Card user={user} sem={sem + 1} subjects={subjects[sem + 1] || subjects[1]} />
// 						</TabPanel>
// 					))}
// 				</SwipeableViews>
// 			</div>
// 			<Button variant="contained" children="DOWNLOAD" />
// 		</Root>
// 	)
// }

// export default AdmitCard
