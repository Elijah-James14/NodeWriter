import { useEffect, useState } from "react";
import PostCard from "../Components/PostCard";
import UseTitle from "../Hooks/UseTitle";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../RealFireBase/config";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const postsReference = collection(db, "posts");
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsReference);
      console.log(data);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
      console.log(posts);
    }
    getPosts();
  }, [toggle]);
  UseTitle("Home");
  return (
    <div className="">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          toggle={toggle}
          setToggle={setToggle}
        />
      ))}
    </div>
  );
};

export default Home;
