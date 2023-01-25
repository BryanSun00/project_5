import React, {useEffect}  from 'react'
import Post from "./Post"
import "../css/PostPage.css"

function PostPage({posts, setPosts , pID, setPID,likes, setLikes, currentUser}) {

    useEffect(() => {
      fetch("/api/posts").then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setPosts(data)});
        }
      });
    }, []);

    function createPostCards(){
      if (posts){
      return posts.map(post => <Post key={post.id} post={post} pID={pID} setPID={setPID} likes={likes} setLikes={setLikes} currentUser={currentUser}/>)
    }}

  return (
    <div className="post-cards">
      {createPostCards()}
    </div>
  )
}

export default PostPage