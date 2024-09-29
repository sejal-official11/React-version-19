import { useEffect, useState } from "react";
import { getPost, deletePost } from "../api/PostApi";
import "../App.css";

export const Posts = () => {
  const [data, setData] = useState([]);
  console.log(getPost());
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // function to delete post
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPost = data.filter((currPost) => {
          return currPost.id != id;
        });
        setData(newUpdatedPost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   return <h1>Hello Post page</h1>;
  return (
    <section className="section-post">
      <ol>
        {data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li key={id}>
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <button>Edit</button>
              <button
                className="btn-delete"
                onClick={() => handleDeletePost(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
