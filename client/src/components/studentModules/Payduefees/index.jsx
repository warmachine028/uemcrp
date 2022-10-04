import { Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import PinIcon from "@mui/icons-material/Pin"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import PaymentsIcon from "@mui/icons-material/Payments"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import { Root, classes } from "./styles"
import { dueFees } from "../../../data/dueFees"

const Payduefees = ({ user }) => {
	return (
		<Root className={classes.root}>
			<Typography variant="h5" fontWeight="bold">
				Dues & Payment Schedule
			</Typography>
			<Typography variant="h6" color="error">
				Due to Debit/Credit Card limits, it is advisable to use net banking (you will find that option at the payment gateway)
			</Typography>
			<Paper className={classes.note}>
				<Typography fontWeight="bold" textAlign="center">
					NOTE
				</Typography>
				<Typography variant="h6">
					For online payment related queries please mail to <a href="mailto:fees@uem.edu.in">fees@uem.edu.in</a>
					<br />
					with the following Details:
				</Typography>
				<Grid container className={classes.grid}>
					<Grid item xs={12} lg={5.5}>
						<List>
							<ListItem disablePadding>
								<ListItemButton role={undefined}>
									<ListItemIcon>
										<PinIcon color="primary" />
									</ListItemIcon>
									<ListItemText id={"labelId"} primary={`Enrollment No.`} />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton role={undefined}>
									<ListItemIcon>
										<LeaderboardIcon color="primary" />
									</ListItemIcon>
									<ListItemText id={"labelId"} primary={`Semester`} />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton role={undefined}>
									<ListItemIcon>
										<PaymentsIcon color="primary" />
									</ListItemIcon>
									<ListItemText id={"labelId"} primary={`Amount`} />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton role={undefined}>
									<ListItemIcon>
										<CalendarMonthIcon color="primary" />
									</ListItemIcon>
									<ListItemText id={"labelId"} primary={`Payment Date`} />
								</ListItemButton>
							</ListItem>
						</List>
						<Typography variant="body1" fontWeight="bold">
							Last date of Payment of fees & other charges for ODD/EVEN Semester is 10th Day of July & January of the Year. After that Late fine will be charged
						</Typography>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell />
									<TableCell>
										Check your data before paying fees
										<Button variant="contained" component={Link} color="success" to="/update" className={classes.button}>
											Update Details
										</Button>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell component="th" scope="row" className={classes.cell}>
										Name:
									</TableCell>
									<TableCell component="th" scope="row">
										{user.name}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row" className={classes.cell}>
										Mobile No:
									</TableCell>
									<TableCell component="th" scope="row">
										{user.mobile}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row" className={classes.cell}>
										Email:
									</TableCell>
									<TableCell component="th" scope="row">
										{user.email}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row" className={classes.cell}>
										Aadhar No:
									</TableCell>
									<TableCell component="th" scope="row">
										{user.aadhar}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Grid>
				</Grid>
			</Paper>
			<TableContainer component={Paper}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Semester</TableCell>
							<TableCell>Fees</TableCell>
							<TableCell>Bus Fare</TableCell>
							<TableCell>Hostel Charges</TableCell>
							<TableCell>Due on</TableCell>
							<TableCell>Fine</TableCell>
							<TableCell>Examination Fees</TableCell>
							<TableCell>Gross Total</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{dueFees.map(data => {
							const { semester, fees, busFare, hostelCharges, dueOn, fine, examFees, paid } = data
							return (
								<TableRow key={semester}>
									<TableCell component="th" scope="row">
										{semester}
									</TableCell>
									<TableCell align="left">{fees}</TableCell>
									<TableCell align="center">{busFare}</TableCell>
									<TableCell align="center">{hostelCharges}</TableCell>
									<TableCell align="center">{dueOn}</TableCell>
									<TableCell align="center">{fine}</TableCell>
									<TableCell align="center">{examFees}</TableCell>
									<TableCell align="right">{fees + busFare + hostelCharges + examFees}</TableCell>
									<TableCell align="right">
										{paid ? (
											<Button variant="contained" className={classes.button} disabled>
												Already Paid
											</Button>
										) : (
											<Tooltip title="Payment must be completed within 10 mins">
												<Button variant="contained" className={classes.button}>
													PROCEED TO PAY
												</Button>
											</Tooltip>
										)}
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Root>
	)
}

export default Payduefees
