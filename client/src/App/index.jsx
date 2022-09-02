import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Auth from "../components/Auth"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import { classes, Root } from "./styles"
import { useState } from "react"
import { students } from "../data/users"
import {
	AdmitCard, //
	ChangePassword,
	OrganisationalCalander,
	Paymentdetails,
	Payduefees,
	UniversityMarkingSystem,
	UpdateInfo,
	UnitTestDetails,
	Attendance,
} from "../components/studentModules"

const App = () => {
	const test = null || students[0]
	const [user, setUser] = useState(test)

	return (
		<BrowserRouter>
			<Root className={classes.root}>
				<Navbar user={user} setUser={setUser} />
				<Routes>
					<Route path="/" element={user ? <Home /> : <Navigate to="/auth" />} />
					<Route path="/auth" element={user ? <Navigate to="/" /> : <Auth setUser={setUser} />} />
					{/*STUDENT MODULES*/}
					<Route path="/changePassword" element={<ChangePassword />} />
					<Route path="/admitCard" element={<AdmitCard user={user} />} />
					<Route path="/calendar" element={<OrganisationalCalander />} />
					<Route path="/feesReciept" element={<Paymentdetails />} />
					<Route path="/fees" element={<Payduefees />} />
					<Route path="/result" element={<UniversityMarkingSystem />} />
					<Route path="/update" element={<UpdateInfo />} />
					<Route path="/marks" element={<UnitTestDetails />} />
					<Route path="/attendance" element={user ? <Attendance /> : <Navigate to="/auth" />} />
				</Routes>
			</Root>
		</BrowserRouter>
	)
}

export default App
