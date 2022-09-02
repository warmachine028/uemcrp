import Form from "../../Form"
import Input from "../../Input"
import { Button, Paper, Typography, Container } from "@mui/material"
import { Root, classes } from "./styles"
import { SaveAsOutlined, Groups } from "@mui/icons-material"
import { useState } from "react"
import Ratings from "./Ratings"

const initialState = {
	understood: "Everything",
	doubts: "No Doubts",
	stars: 3,
}

const Attendance = () => {
	//* To be fetched from the server later
	const validCode = "K1234567891011"
	const [formData, setFormData] = useState(initialState)
	const [code, setCode] = useState("")
	const [error, setError] = useState(false)
	const [showPage, setShowPage] = useState(false)
	const [codeFound, setCodeFound] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		const correct = code.match(/^[0-9A-Z]*$/) && code.length > 12
		if (!correct) {
			setError(true)
			return
		}
		setError(false)
		setShowPage(true)

		//* Later to be decided by the server
		if (code !== validCode) {
			setCodeFound(false)
			return
		}
		setCodeFound(true)
	}
	const handleChange = event => setFormData({ ...formData, [event.target.name]: event.target.value })

	return (
		<Root className={classes.root}>
			{showPage ? (
				codeFound ? (
					<Form icon={<Groups />} title="Faculty Feedback">
						<Ratings value={formData.stars} onChange={handleChange} />
						<Input name="understood" label="Concepts I understood" onChange={handleChange} value={formData.understood} required={false} />
						<Input name="doubts" label="Concepts I have doubt" onChange={handleChange} value={formData.doubts} required={false} />
						<Button type="submit" fullWidth className={classes.submit}>
							SUBMIT
						</Button>
					</Form>
				) : (
					<Container component="main" width="100%" className={classes.container}>
						<Paper className={classes.paper} elevation={6}>
							<Typography color="error" variant="h6" textAlign="center">
								Attendance code not found. Please contact your course faculty.
							</Typography>
						</Paper>
						<Paper className={classes.paper} elevation={6} style={{}}>
							<Typography color="error" variant="h6" textAlign="center">
								Not a correct Time.
							</Typography>
						</Paper>
					</Container>
				)
			) : (
				<Form title="Attendance" icon={<SaveAsOutlined />} submit={handleSubmit}>
					<Input
						error={error}
						helperText={error && "Code is at least 12 characters with digits and capitals"}
						name="attendance code"
						value={code}
						label="Attendance Code"
						onChange={e => setCode(e.target.value)}
						required={false}
					/>
					<Button type="submit" fullWidth className={classes.submit}>
						SUBMIT
					</Button>
				</Form>
			)}
		</Root>
	)
}

export default Attendance
