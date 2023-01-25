import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/PostForm.css"

function PostForm({ currentUser, posts, setPosts, pID, setPID }) {
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		image: "",
		comment: "",
		tags: ""
	});

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	function handleSubmit(e) {
		e.preventDefault();
		// debugger;
		const post = {
			name: formData.name,
			image: formData.image,
			description: formData.description,
			tags: formData.tags,
			user_id: currentUser.id,
		};
		fetch(`/api/posts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		}).then((r) => {
			if (r.ok) {
				r.json()
					.then((post) => {
						setPID(post.id)
						setPosts([...posts, post])
					})
					.then(navigate("/postpage"));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
    
    return (
      <div>
			<div className="New-post-card">
				<br />
        <div className="error-wrapper" >
			<div className="errors">
    {!errors ? null : errors.map((error) => <p className="error" key={error}>{error}</p>)}
				</div>
				</div>
				<form className="post-form" onSubmit={handleSubmit}>
                    <h4 className="post-title">  New Post</h4>
					<div>
						<label className="post-label" htmlFor="name">
						
						</label>
						<input
							placeholder="Name:"
							className="post-input"
							type="text"
							name="name"
							value={formData.name}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div>
						<label className="post-label" htmlFor="age">
						
						</label>
						<input
						placeholder="Image:"
							className="post-input"
							type="text"
							name="image"
							value={formData.image}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div>
						<label className="post-label" htmlFor="username">
							
						</label>
						<input
						placeholder="Description:"
							className="post-input"
							type="text"
							name="description"
							value={formData.description}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div>
						<label className="post-label" htmlFor="password">
							
						</label>
						<input
						placeholder="Tags:"
							className="post-input"
							type="text"
							name="tags"
							value={formData.tags}
							onChange={(e) => handleChange(e)}
						/>
					</div>

					<div>
						<button className="post-button" type="submit">Post</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default PostForm;
