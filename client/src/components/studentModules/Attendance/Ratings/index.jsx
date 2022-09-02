import { useState } from "react"
import { Typography, Rating, Box } from "@mui/material"
import { Root, classes } from "./styles"

const Ratings = ({ value, onChange }) => {
	const labels = {
		1: "I understood nothing",
		2: "I still have some doubts",
		3: "The concepts were clear",
		4: "Faculty teach good",
		5: "My Favourite Teacher",
	}

	const [hover, setHover] = useState(-1)

	return (
		<Root className={classes.root}>
			<Typography fontWeight="bold" component="legend">
				{labels[value]}
			</Typography>
			<div className={classes.ratingContainer}>
				<Rating //
					name="stars"
					value={Number(value)}
					onChange={onChange}
					onChangeActive={(_, newHover) => setHover(newHover)}
				/>
				{<Box>{labels[hover !== -1 ? hover : value]}</Box>}
			</div>
		</Root>
	)
}

export default Ratings
