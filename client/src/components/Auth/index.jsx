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
import { styled } from "@mui/material/styles"
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Root, classes } from "./styles"

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
						<Input error={error.enrollment} name="enrollment" value={formData.enrollment} label="USER NAME" onChange={handleChange} />
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
							<Select fullWidth label="Role" labelId="role-label" value={formData.role} onChange={handleChange}>
								<MenuItem value="TEACHER-STUF">TEACHER-STUF</MenuItem>
								<MenuItem value="STUDENT">STUDENT</MenuItem>
							</Select>
						</FormControl>

						<Button type="submit" fullWidth className={classes.submit} style={{ color: "white" }}>
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
const BpIcon = styled("span")(({ theme }) => ({
	borderRadius: 3,
	width: 16,
	height: 16,
	boxShadow: theme.palette.mode === "dark" ? "0 0 0 1px rgb(16 22 26 / 40%)" : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
	backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
	backgroundImage: theme.palette.mode === "dark" ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))" : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
	".Mui-focusVisible &": {
		outline: "2px auto black",
		outlineOffset: 2,
	},
	"input:hover ~ &": {
		backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
	},
	"input:disabled ~ &": {
		boxShadow: "none",
		background: theme.palette.mode === "dark" ? "rgba(57,75,89,.5)" : "rgba(206,217,224,.5)",
	},
}))

const BpCheckedIcon = styled(BpIcon)({
	backgroundColor: "black",
	backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
	"&:before": {
		display: "block",
		width: 16,
		height: 16,
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
			" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
			"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
		content: '""',
	},
	"input:hover ~ &": {
		backgroundColor: "gray",
	},
})

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
