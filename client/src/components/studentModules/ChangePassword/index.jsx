import React from 'react'
import "./app.css"
const ChangePassword = () => {
  return (
    <div className="container">
        <div className="app-wraper">
            <div>
                <h2 className="title">!Change Password!</h2>
            </div>
            <form  className="form-wrapper">
            <div className="password">
                    <label  className="lable">Old Password</label>
                    <input type="password" className="input" />
                </div>
                <div className="password">
                    <label  className="lable">New Password</label>
                    <input type="password" className="input" />
                </div>
                <div className="password">
                    <label  className="lable">Retype New Password</label>
                    <input type="password" className="input" />
                </div>
                <div>
                    <button className="submit">Change Password</button>
                </div>
            </form>
        </div>
    </div>

  );
};

export default ChangePassword

// import "./app.css";
// const ChangePassword = () => {
// 	return (
// 		<div className="container" style={{
// 			                			aligncontent: "center",
// 			                			position:"relative",
// 			                			width:"70vw",
// 			                			height: "70vh",
// 			                			margin: "auto",
// 										   }}>
// 						  <form style={{position:"absolute",
// 										top: "0", bottom: "0", left: "0", right: "0",
// 										margin: "auto",
// 										background: "white",
// 										borderRadius: "5px",
// 										width: "25vw", 
// 										height: "40vh",
// 										fontWeight: "bold",
// 										textAlign: "center"
// 										}}>
//    					 <div className="inputs" style={{margin:"14vh 14vh"
// 													 }}>
//     		        <div style={{margin:"6px 6px",
// 				                 color:"blue"}}><input type="password" name="Password" placeholder="Old Password*"/></div>
//     		        <div style={{margin:"6px 6px",
// 				                 color:"blue"}}><input type="password" name="Password" placeholder="New Password*" /></div>
// 					<div style={{margin:"6px 6px",
// 				                 color:"blue"}}><input type="password" name="Password" placeholder="Re-type New Password" /></div>
//   					<button type="submit"
// 							fullWidth
// 							// sx={{
// 							// 	"&:hover": { backgroundColor: "#564f95" },
// 							// }}
// 							style={{
// 								borderRadius:"3px",
// 								backgroundColor: "#564f95",
// 								color: "white",
// 								margin:"auto",
// 								cursor: 'pointer'
// 							}}>CHANGE PASSWORD</button>
// 							</div>
					
					
// 		</form>
// 		</div>
// 	);
// }

// export default ChangePassword