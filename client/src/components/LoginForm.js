import React  from 'react'
import {useNavigate} from "react-router-dom"

function LoginForm({setErrors, setCurrentUser, username, password, handleChange,}) {

const navigate = useNavigate()

    function handleSubmit(e) {
		e.preventDefault();
		const user = {
			username: username,
			password: password,
		};


		fetch(`/api/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((r) => {
			if (r.ok) {
				r.json()
					.then((user) => setCurrentUser(user))
					.then(navigate("/"));
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}
  return (
    <div className="login-form-div">
    <form className="login-form" onSubmit={handleSubmit}>
        <div>
            <label className="login-label" htmlFor="username">
                Username:{" "}
            </label>
            <input
                className="login-input"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => handleChange(e)}
            />
        </div>
        <div>
            <label className="login-label" htmlFor="password">
                Password:{" "}
            </label>
            <input
                className="login-input"
                type="password"
                id="pass"
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
            />
        </div>
        <div>
            <button className="login-button" type="submit" value="Login">
                Login
            </button>
        </div>
    </form>
</div>
  )
}

export default LoginForm