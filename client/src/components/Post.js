import React from 'react'
import { useNavigate } from 'react-router-dom'

function Post({post, setPID}) {
  const navigate = useNavigate()
  function handleNav(){
  
    setPID(post.id)
      navigate(`/posts/${post.id}`)
  }


  return (
    <div >
        <img src={post.image} alt={post.name} onClick={handleNav}/>
        <p> tag: {post.tag}</p>
        <h1>{post.name} </h1>
    </div>
  )
}

export default Post