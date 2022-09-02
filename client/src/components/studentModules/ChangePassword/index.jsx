import Form from "../../Form"
import Input from "../../Input"
import { Root, classes } from "./styles"
import { Button } from "@mui/material"
import { Groups } from "@mui/icons-material"

const ChangePassword = () => {
	return (
		<Root className={classes.root}>
			<Form icon={<Groups />} title="Change Password">
				<Input name="oldPassword" label="Old Password"/>
				<Input name="newPassword" label="New Password"/>
				<Input name="repeatPassword" label="Repeat New Password"/>
				<Button type="submit" fullWidth className={classes.submit}>
					Change Password
				</Button>
			</Form>
		</Root>
	)
}

export default ChangePassword
