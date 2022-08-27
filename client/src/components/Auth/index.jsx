import {
	Avatar, //
	Container,
	TextField,
	InputAdornment,
	IconButton,
	Grid,
	Paper,
	Typography,
	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Checkbox,
} from "@mui/material"

import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Root, classes, BpCheckedIcon, BpIcon } from "./styles"

// * Dynamic Objects
// * These objects are to be fetched OR created dynamically
import captcha from "../../assets/captcha.png"
import { students } from "../../data/users"

const Input = ({ name, half, type, handleShowPassword, ...props }) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				style={{ margin: "5px 0" }}
				name={name}
				variant="outlined"
				required
				fullWidth
				type={type}
				{...props}
				autoComplete={name === "password" ? "current-password" : "off"}
				InputProps={
					name === "password"
						? {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleShowPassword}>{type === "password" ? <Visibility /> : <VisibilityOff />}</IconButton>
									</InputAdornment>
								),
						  }
						: null
				}
			/>
		</Grid>
	)
}
const initialState = {
	enrollment: "", //
	password: "",
	captcha: "",
	role: "student",
	remember: false,
	captchaImg: captcha,
}

const Auth = ({ setUser }) => {
	const [formData, setFormData] = useState(initialState)
	const [error, setError] = useState({ enrollment: false, password: false, captcha: false })
	const [showPassword, setShowPassword] = useState(false)
	const handleChange = event => setFormData({ ...formData, [event.target.name]: event.target.value })
	const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword)
	const handleRemember = () => setFormData({ ...formData, remember: !formData.remember })
	const navigate = useNavigate()
	const user = students[0]
	const handleSubmit = event => {
		event.preventDefault()
		if (validate()) {
			setUser(user)
			navigate("/")
		}
	}
	const validate = () => {
		const errors = {
			enrollment: !formData.enrollment.match(/^[0-9]*$/) || formData.enrollment.length < 13,
			password: formData.password.length < 6,
			captcha: formData.captcha !== "G2KS",
		}
		setError(errors)
		return !(errors.enrollment || errors.password || errors.captcha)
	}
	return (
		<Root className={classes.root}>
			<Container component="main" maxWidth="xs">
				<Paper className={classes.paper} elevation={6}>
					<Avatar className={classes.avatar}>
						<LockOutlined />
					</Avatar>
					<Typography variant="h5">SIGN IN</Typography>
					<form className={classes.form} onSubmit={handleSubmit}>
						<Input error={error.enrollment} name="enrollment" value={formData.enrollment} label="User Name" onChange={handleChange} />
						<Input
							name="password"
							error={error.password}
							value={formData.password}
							label="Password"
							onChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleShowPassword={handleShowPassword}
						/>
						<img src={formData.captchaImg} alt="captcha" className={classes.captchaImg} />

						<Input error={error.captcha} value={formData.captcha} name="captcha" label="Captcha" onChange={handleChange} />
						<FormControl fullWidth style={{ padding: "5px 0px" }}>
							<InputLabel id="role-label" style={{ top: 5 }}>
								Role
							</InputLabel>
							<Select fullWidth label="Role" labelId="role-label" value={formData.role} onChange={handleChange} name="role">
								<MenuItem name="role" value="teacher">
									Staff & Faculty
								</MenuItem>
								<MenuItem name="role" value="student">
									Student
								</MenuItem>
							</Select>
						</FormControl>

						<Button
							type="submit"
							fullWidth
							className={classes.submit}
							sx={{
								// "&:hover": { backgroundColor: "#564f95" },
							}}
							style={{
								color: "white",
							}}
						>
							SIGN IN
						</Button>
						<Grid container justifyContent="space-between">
							<Button style={{ paddingLeft: 0 }} onClick={handleRemember} value={formData.remember} disableElevation disableRipple>
								<BpCheckbox checked={formData.remember} />
								Remember Me
							</Button>
							<Button component={Link} to="/auth">
								Forgot Password
							</Button>
						</Grid>
					</form>
				</Paper>
			</Container>
		</Root>
	)
}

const BpCheckbox = props => {
	return (
		<Checkbox
			sx={{
				"&:hover": { bgcolor: "transparent" },
			}}
			checked={props.checked}
			disableRipple
			color="default"
			checkedIcon={<BpCheckedIcon />}
			icon={<BpIcon />}
			inputProps={{ "aria-label": "Checkbox demo" }}
			{...props}
		/>
	)
}
export default Auth
