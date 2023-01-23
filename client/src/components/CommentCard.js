import React from 'react'

function CommentCard({comment}) {
//     function handleDelete() {
// 		fetch(`/posts/${id}`, {
// 			method: "DELETE",
//     });
//    window.location.reload()
// 	}
  return (
    <div>
        <p>
            {comment.user_comment}
        </p>
        {/* {!reviewFor ? null : <button className="delete-button" onClick={handleDelete}> Delete </button>} */}
    </div>
  )
}

export default CommentCard