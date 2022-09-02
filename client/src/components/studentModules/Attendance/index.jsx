import Form from "../../Form"
import Input from "../../Input"
import { Button, Typography } from "@mui/material"
import { Root, classes } from "./styles"
import { SaveAsOutlined } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Attendance = () => {
	const [code, setCode] = useState("")
	const [error, setError] = useState(false)
	const [showPage, setShowPage] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		const correct = code.match(/^[0-9A-Z]*$/) && code.length > 12
		if (!correct) {
			setError(true)
			return
		}
		setError(true)
		setShowPage(false)
	}

	return showPage ? (
		<Typography>The</Typography>
	) : (
		<Root className={classes.root}>
			<Form title="Attendance" submit={handleSubmit}>
				<Input error={error} name="attendance code" value={code} label="Attendance Code" onChange={e => setCode(e.target.value)} required={false} />
				<Button type="submit" fullWidth className={classes.submit}>
					SUBMIT
				</Button>
			</Form>
		</Root>
	)
}

export default Attendance
