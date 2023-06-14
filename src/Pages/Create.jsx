import { addDoc, collection } from "firebase/firestore";
import UseTitle from "../Hooks/UseTitle";
import { auth, db } from "../RealFireBase/config";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const postReference = collection(db, "posts");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };
    await addDoc(postReference, document);
    navigate("/");
  }
  UseTitle("Create Post");
  return (
    <div className="flex flex-col max-w-xl m-auto">
      <h1 className="text-center font-bold text-2xl mt-3 mb-3">Add New Post</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="shadow-md mb-3 h-10"
        />
        <textarea
          className="shadow-md"
          name="description"
          placeholder="Description..."
          cols="30"
          rows="10"
        ></textarea>
        <input
          type="submit"
          value="Create Post"
          className="bg-green-400 text-white mt-3 p-2 rounded cursor-pointer font-bold"
        />
      </form>
    </div>
  );
};

export default Create;
