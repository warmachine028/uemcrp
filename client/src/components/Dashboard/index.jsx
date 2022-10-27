import { Root, classes } from "./styles"
import { Card, CardMedia, CardContent, Typography, Paper, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import modules from "../../data/dashboard"

const DashboardAction = ({ title, image, goTo }) => {
	return (
		<Card className={classes.card} component={Link} to={goTo} abcd>
			<CardMedia className={classes.cardMedia} component="img" alt="dashboard-component" image={image} />
			<CardContent>
				<Typography className={classes.cardTitle} gutterBottom>
					{title}
				</Typography>
			</CardContent>
		</Card>
	)
}

const Dashboard = ({ type }) => {
	const DashboardItems = modules[type]

	return (
		<Root className={classes.root}>
			<Paper className={classes.paper}>
				<Typography className={classes.title}>DASHBOARD</Typography>
				<Grid container className={classes.grid}>
					{DashboardItems.map(({ id, title, image, link }) => (
						<Grid item className={classes.gridCard} xs={12} sm={6} md={3} lg={4} key={id}>
							<DashboardAction title={title} image={image} goTo={link} />
						</Grid>
					))}
				</Grid>
			</Paper>
		</Root>
	)
}

export default Dashboard
