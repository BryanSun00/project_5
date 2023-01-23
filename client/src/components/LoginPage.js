import React, {useState} from 'react'
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";
import { useNavigate } from "react-router-dom";


function LoginPage({currentUser, setCurrentUser}) {
    const [formData, setFormData] = useState({
		name: "",
		age: "",
		username: "",
		password: "",
		passwordConfirmation: "",
	});
	const navigate = useNavigate();
	const [errors, setErrors] = useState([]);

	const [display, setDisplay] = useState("login");

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	function handleResets() {
		setFormData({
			name: "",
			age: "",
			username: "",
			password: "",
			passwordConfirmation: "",
		});
		setErrors([]);
	}

	const handleLog = () => {
		handleResets();
		setDisplay("login");
	};
	const handleNew = () => {
		handleResets();
		setDisplay("new");
	};

	const handleRender = () => {
		if (display === "login") {
			return (
				<LoginForm
					username={formData.username}
					password={formData.password}
					handleChange={handleChange}
					setErrors={setErrors}
					setCurrentUser={setCurrentUser}
					navigate={navigate}
				/>
			);
		} else if (display === "new") {
			return (
				<NewUserForm
					formData={formData}
					handleChange={handleChange}
					setCurrentUser={setCurrentUser}
					setErrors={setErrors}
					navigate={navigate}
				/>
			);
		}
	};
	return (
		<div className="login-card">
			<br />
			<button className="button" onClick={handleNew}>
				Create New User
			</button>
			<br />
			<button className="button" onClick={handleLog}>
				Login to Your Account
			</button>
			<div className="error-wrapper" >
			<div className="errors">
    {!errors ? null : errors.map((error) => <p className="error" key={error}>{error}</p>)}
				</div>
				</div>
			<br />
			{handleRender(display)}
		</div>
	);
}

export default LoginPage