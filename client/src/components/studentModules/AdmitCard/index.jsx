import { Root, classes } from "./styles"
import { Tabs, Typography, Tab, Box, Button } from "@mui/material"
import SwipeableViews from "react-swipeable-views-react-18-fix"
import { useTheme } from "@mui/material/styles"
import { useState } from "react"
import { savePDF } from "@progress/kendo-react-pdf"
import Card from "./Card"
import subjects from "../../../data/subjects.js"
import { useRef } from "react"
import moment from "moment"
// im

const TabPanel = ({ children, value, index, ...other }) => (
	<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
		{value === index && <Box>{children}</Box>}
	</div>
)

const AdmitCard = ({ user }) => {
	const theme = useTheme()
	const contentArea = useRef(null)
	const [value, setValue] = useState(0)
	const currentSemester = user.semester - 1
	const semesters = [...Array(currentSemester).keys()]

	const download = () => savePDF(contentArea.current, { fileName: `ADMIT_CARD_${user.enrollment}_${moment().format("DDMMYYYY_HHmmss")}` })

	return (
		<Root className={classes.root}>
			<Typography className={classes.title} children="admit cards" />
			<div className={classes.mainContainer}>
				<Tabs variant="scrollable" value={value} onChange={(_, newValue) => setValue(newValue)} aria-label="basic tabs" className={classes.tabs}>
					{semesters.map(sem => (
						<Tab label={`SEMESTER ${sem + 1}`} key={sem} />
					))}
				</Tabs>
				<SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={index => setValue(index)}>
					{semesters.map(sem => (
						<TabPanel className={classes.tabPannel} value={value} index={sem} dir={theme.direction} key={sem}>
							<Card user={user} sem={sem + 1} subjects={subjects[sem + 1] || subjects[1]} _ref={contentArea} />
						</TabPanel>
					))}
				</SwipeableViews>
			</div>
			<Button variant="contained" children="DOWNLOAD" onClick={download} />
		</Root>
	)
}

export default AdmitCard
