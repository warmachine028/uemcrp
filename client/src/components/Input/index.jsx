import {
	TextField, //
	InputAdornment,
	IconButton,
	Grid,
} from "@mui/material"

import { Visibility, VisibilityOff } from "@mui/icons-material"

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

export default Input
