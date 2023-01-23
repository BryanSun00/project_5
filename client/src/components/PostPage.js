import React, {useEffect}  from 'react'
import Post from "./Post"
import "../css/PostPage.css"

function PostPage({posts, setPosts , pID, setPID}) {


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
      return posts.map(post => <Post key={post.id} post={post} pID={pID} setPID={setPID}/>)
    }}

  return (
    <div className="post-card">
      {createPostCards()}
    </div>
  )
}

export default PostPage