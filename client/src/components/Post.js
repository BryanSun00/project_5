import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Post.css"

function Post({post, setPID, currentUser, setLikes, likes}) {
  const navigate = useNavigate()
  function handleNav(){
    setPID(post.id)
      navigate(`/posts/${post.id}`)
  }

	function likeHandler(){
		const like = {
			user_id: currentUser.id,
			post_id: post.id
		}
    console.log(currentUser.id)
		fetch(`/api/likes`,{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(like)
        })
		.then(r => r.json())
		.then(newLike => setLikes([...likes, newLike]))
	}

  return (
    <div className='post-card' >
        <h1 className='post-name'>{post.name} </h1>
        <img className='post-image' src={post.image} alt={post.name} onClick={handleNav}/>
        <div className='post-sub-details'>
        <p> tag: {post.tag}</p>
        <button className='post-page-button' onClick={likeHandler}> like</button>
        </div>
    </div>
  )
}

export default Post