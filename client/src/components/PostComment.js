import React, {useState} from 'react'
import "../css/PostComment.css"

function PostComment({navigate, currentUser, pID}) {
	const [comment, setComment] = useState("");
	const [errors, setErrors] = useState([]);

	function handleSubmit(e) {
		e.preventDefault()
		const commentForm = {
			user_id: currentUser.id,
			post_id: pID,
			user_comment: comment 
		}
		console.log(commentForm)
		fetch(`/api/comments`,{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(commentForm),
		})
		.then((r) => {
			if (r.ok) {
				r.json()
					.then(window.location.reload())
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}

  return (
		<div className="comment-field">
			<form onSubmit={handleSubmit}>
				<textarea className='comment-input'
					onChange={(e) => setComment(e.target.value)}
					placeholder="Comment"
					value={comment}
					required
				></textarea>
				<br />

				<button className="comment-button">Submit</button>
			</form>
			<div>
			{!errors ? null : errors.map((error) => <p className="error" key={error}>{error}</p>)}
			</div>
		</div>
  )
}

export default PostComment