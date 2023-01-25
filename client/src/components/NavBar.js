import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/NavBar.css"


function NavBar({ currentUser, setCurrentUser }) {
	const navigate = useNavigate()

	function handleLogOut() {
		fetch("/api/logout", {
			method: "DELETE",
		})
			.then(() => setCurrentUser(""))
			.then(navigate('/'));
	}

	return (
		<div>
		<div className="nav-bar">
		<div >
		<img className="navbar-pic" src="https://i.imgur.com/IyKQK73.jpg" alt="Home Space"/>
		</div>
		<div className="navbar">

			<Link className="navbar-item"  to="/postpage">
				Home
			</Link>
			{!currentUser ? null : (
				<Link className="navbar-item" to="/postform">
					Create Post
				</Link>
			)}
			{currentUser ? (
				<Link className="navbar-item" to="/likes">
					{" "}
					Likes{" "}
				</Link>
			) : null}
			{currentUser ? (
				<Link className="navbar-item" to="/userpage">
					{" "}
					Profile{" "}
				</Link>
			) : null}
			{!currentUser ? (
				<Link className="navbar-item" to="/loginpage">
					{" "}
					Log In{" "}
				</Link>
			) : (
				<button className="navbar-item" onClick={handleLogOut}>
					Log Out
				</button>
			)}
		</div>
		</div>
		{!currentUser ? null : <h4 className="font-effect-3d-float">Welcome {currentUser.username} </h4>}
		</div>
	);
}
export default NavBar;