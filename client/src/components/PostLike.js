import React, {useState, useEffect} from 'react'
import Post from "./Post"

function PostLike({currentUser, posts, setPosts, setLikes, likes}) {

useEffect(() => {
  fetch("/api/likes").then((r) => {
    if (r.ok) {
      r.json().then((data) => {
        console.log(data)
        setLikes(data)});
    }
  });
}, []);

if (!currentUser) {
  return <div>Loading...</div>;
}

  return (
    <div className='post-liked'>
        {likes.map((like) => <Post post={like.post} currentUser={currentUser} key={like.id} /> )}
    </div>
  )
}

export default PostLike