import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../RealFireBase/config";

const PostCard = ({ post, toggle, setToggle }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  async function handleDelete() {
    const postDoc = doc(db, "posts", post.id);
    await deleteDoc(postDoc);
    setToggle(!toggle);
  }
  return (
    <section className=" max-w-6xl m-auto rounded shadow-sm p-3 mt-3">
      <p className="font-bold mb-3">{post.title}</p>
      <p className="mb-3">{post.description}</p>
      <div className="flex justify-between">
        <span className="bg-gray-300 p-1 rounded">{post.author.name}</span>
        {isAuth && post.author.id === auth.currentUser.uid && (
          <span onClick={handleDelete}>
            <i className="bi bi-trash3 text-red-400 cursor-pointer"></i>
          </span>
        )}
      </div>
    </section>
  );
};

export default PostCard;

//If the name signed in, is not the name at the document, then do not show the "thrash" icon

//If the auth.currentUser.uid !== post.author.id, do not show the thrash icon.
