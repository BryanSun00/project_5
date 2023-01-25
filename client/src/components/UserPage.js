import React, { useState, useEffect } from "react";
import "../css/UserPage.css"
// import { useParams } from "react-router-dom";
// import ReviewCard from "./ReviewCard";
// import RecipeCard from "./RecipeCard";

function UserPage({ currentUser, setCurrentUser }) {
	const [errors, setErrors] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		age: "",
		username: "",
		password: "",
	});
	useEffect(() => {
		const formCreate = async () => {
			const user = await currentUser;
			setFormData({
				name: user.name,
				age: user.age,
				username: user.username,
				password: "",
			});
		};
		formCreate();
	}, [currentUser]);

	if (!currentUser) {
		return <div>...loading</div>;
	}
	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	function handleUpdate(e) {
		e.preventDefault();
		const patchUser = {
			name: formData.name,
			age: formData.age,
			username: formData.username,
			password: formData.password,
		};

		fetch(`/users/${currentUser.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(patchUser),
		}).then((r) => {
			if (r.ok) {
				r.json().then(setFormData);
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}

	return (
		<div className="New-user-card">
			<br />
			<div className="error-wrapper">
				<div className="errors">
					{!errors
						? null
						: errors.map((error) => (
								<p className="error" key={error}>
									{error}
								</p>
						  ))}
				</div>
			</div>

			<form className="user-form" onSubmit={handleUpdate}>
                <div className="user-form-title">
                    <h4>
                            Profile Info
                    </h4>
                </div>
				<div>
					<label className="user-label" htmlFor="name">
						
					</label>
					<input
					placeholder="Name:"
						className="user-input"
						type="text"
						name="name"
						value={formData.name}
						onChange={(e) => handleChange(e)}
					/>
				</div>
		
				<div>
					<label className="user-label" htmlFor="username">
						
					</label>
					<input
					placeholder="Username:"
						className="user-input"
						type="text"
						name="username"
						value={formData.username}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div>
					<label className="user-label" htmlFor="password">
						
					</label>
					<input
					placeholder="Password:"
						className="user-input"
						type="password"
						name="password"
						value={formData.password}
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div>
					<input className="user-button" type="submit" name="update"/>
				</div>
			</form>
			<br />
		</div>
	);
}

export default UserPage;
