import { Avatar, Container, Paper, Typography } from "@mui/material"
import { Root, classes } from "./styles"

const Form = ({ icon, title, submit, children }) => {
	return (
		<Root className={classes.root}>
			<Container component="main" maxWidth="xs">
				<Paper className={classes.paper} elevation={6}>
					<Avatar className={classes.avatar}>{icon}</Avatar>
					<Typography variant="h5">{title}</Typography>
					<form className={classes.form} onSubmit={submit}>
						{children}
					</form>
				</Paper>
			</Container>
		</Root>
	)
}

export default Form
