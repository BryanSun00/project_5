import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostComment from './PostComment'
import CommentCard from './CommentCard'

function PostView({ currentUser, setCurrentUser, posts }) {
  const [postView, setPostview] =useState([])
  const [isLoading, setIsLoading]= useState(true)
  const navigate = useNavigate()
  const { id } = useParams()

    const fetchData = async () => {
      console.log(id)
      const response = await fetch(`/api/posts/${id}`);
      const post = await response.json();
       await setPostview(post);
       await setIsLoading(false)
      console.log(post)
    };
    
    useEffect(() => {
      fetchData();
    }, []);

    useEffect(() => {
      console.log(postView)
    }, [postView]);
  // function deletePost() {
  //   fetch(`/api/posts/${id}`, {
  //     method: "DELETE",
  //   });
  //   navigate("/");
  // }

  if (isLoading) {
    return <p>Loading post...</p>;
  } else{

  return (
    <div className="post-view">
      <div className="post-header">
        <h1>{postView.name} </h1>
      </div>
      <div className="post-content">
        <img src={postView.image} alt={postView.name} />
        <br />
      </div>
      {/* <div><p>Submitted by {postView.name}</p> </div> */}
      <div className="post-description">
          <h4>{postView.description}</h4>
      </div>
      <br />
      <PostComment navigate={navigate} pID={postView.id} currentUser={currentUser} />
      <div className="comments">
        <h4>Comments :</h4>
        {isLoading? null : postView.comments.map((comment) => <CommentCard comment={comment} key={comment.id}/>)}
      </div>
      <br />
      {/* {currentUser.id === posts.user.id ? (
        <button className="delete-button" onClick={deletePost}>Delete Post</button>
      ) : null} */}
    </div>
  )
}}

export default PostView