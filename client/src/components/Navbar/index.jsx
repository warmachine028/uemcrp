import { AppBar, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { classes, Root } from "./styles"
const Navbar = ({ user }) => {
	return (
		<Root className={classes.root} logoutVisible={user ? "block" : "none"}>
			<AppBar className={classes.appbar}>
				<Link className={classes.brand} to="/">
					<img src={logo} alt="logo" className={classes.icon} />
					<Typography className={classes.logo}>UNIVERSITY OF ENGINEERING AND MANAGEMENT, KOLKATA</Typography>
					<Typography className={classes.logo2}>UEM KOLKATA</Typography>
				</Link>
				<Button className={classes.logout}>LOGOUT</Button>
			</AppBar>
		</Root>
	)
}

export default Navbar
