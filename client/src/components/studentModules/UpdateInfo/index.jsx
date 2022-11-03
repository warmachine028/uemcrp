import { Button } from '@mui/material';
import { useState } from 'react'
import Input from '../../Input/index'
import { Root, classes } from './styles'

/**
 * Enum for what input has changed
 */
const InputType = {
	Email: 0,
	Phone: 1,
	HouseFlat: 2,
	City: 3,
	State: 4,
	ZipCode: 5,
};

const UpdateInfo = ({ user, updateUserInfo }) => {
	const [email, setEmail] = useState(user.email);
	const [phoneNumber, setPhoneNumber] = useState(user.mobile);
	const [address, setAddress] = useState(user.permanentAddress);

	const handleChange = (event, type) => {
		switch (type) {
			case InputType.Email: setEmail(event.target.value); break;
			case InputType.Phone: setPhoneNumber(event.value); break;
			case InputType.HouseFlat: setAddress({ ...address, houseFlat: event.target.value }); break;
			case InputType.City: setAddress({ ...address, city: event.target.value }); break;
			case InputType.State: setAddress({ ...address, state: event.target.value }); break;
			case InputType.ZipCode: setAddress({ ...address, zip: event.target.value }); break;
		}
	}

	const handleSubmit = () => {
		// TODO: Update this function to handle validation and 
		updateUserInfo({
			...user,
			email: email,
			mobile: phoneNumber,
			permanentAddress: address,
		});
	}

	return (
		<Root className={classes.root}>
			<Input
				value={email}
				name="emailAddress"
				label="Email Address"
				onChange={event => handleChange(event, InputType.Email)}
				className={classes.input} />
			<Input
				value={phoneNumber}
				name="phoneNumber"
				label="Phone Number"
				onChange={event => handleChange(event, InputType.Phone)}
				className={classes.input} />

			<>
				<h4>Permanent Address</h4>
				<Input
					value={address.houseFlat}
					name="houseFlat"
					label="House/Flat Name/No."
					onChange={event => handleChange(event, InputType.HouseFlat)}
					className={classes.input} />
				<Input
					value={address.city}
					name="city"
					label="City"
					onChange={event => handleChange(event, InputType.City)}
					className={classes.input} />
				<Input
					value={address.state}
					name="state"
					label="State"
					onChange={event => handleChange(event, InputType.State)}
					className={classes.input} />
				<Input
					value={address.zip}
					name="zipCode"
					label="Zipcode"
					onChange={event => handleChange(event, InputType.ZipCode)}
					className={classes.input} />
			</>
			<Button type="submit" fullWidth className={classes.submitButton} onClick={handleSubmit}>
				SUBMIT
			</Button>
		</Root>
	)
}

export default UpdateInfo
