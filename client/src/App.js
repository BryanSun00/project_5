import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PostPage from "./components/PostPage";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import PostForm from "./components/PostForm";
import UserPage from "./components/UserPage";
import PostView from "./components/PostView";
import PostLike from "./components/PostLike"
// import LikePage from "./components/LikePage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [pID, setPID] = useState(null);
  const [likes, setLikes] = useState([])

  useEffect(() => {
    fetch("/api/auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <>
        <Route
          path="/loginpage"
          element={
            <LoginPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        </>
        <Route
          path="/postpage"
          element={
            <PostPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              posts={posts}
              setPosts={setPosts}
              pID={pID}
              setPID={setPID}
              likes={likes}
              setLikes={setLikes}
            />
          }
        />
        <Route
          path="/postform"
          element={
            <PostForm
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              posts={posts}
              setPost={setPosts}
              pID={pID}
              setPID={setPID}
            />
          }
        />
       <Route
          path="/posts/:id"
          element={
            <PostView
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              posts={posts}
              setPosts={setPosts}
            />
          }
        />
        <Route
          path="/userpage"
          element={
            <UserPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/likes"
          element={
            <PostLike
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              posts={posts}
              setPosts={setPosts}
              likes={likes}
              setLikes={setLikes}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
