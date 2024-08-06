import React, { useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";
import "@fortawesome/fontawesome-free/css/all.min.css";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
    { id: 3, title: "t3", content: "c3" },
  ]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const getTitle = useRef();
  const getContent = useRef();

  const saveTitleToState = (e) => {
    setTitle(e.target.value);
  };

  const saveContentToState = (e) => {
    setContent(e.target.value);
  };

  const savePost = (e) => {
    e.preventDefault();
    const id = Date.now();
    setPosts([...posts, { id, title, content }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreate();
    cancelCreate();
  };

  const cancelCreate = () => {
    setIsCreate(false);
  };

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const editPost = (id) => {
    setEditId(id);
    toggleEdit();
  };

  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = posts.map((eachPost) => {
      if (eachPost.id === editId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      return eachPost;
    });
    setPosts(updatedPost);
    toggleEdit();
  };

  const deletePost = (id) => {
    const modifiedPosts = posts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setPosts(modifiedPosts);
  };

  if (isCreate) {
    return (
      <Create
        getTitle={getTitle}
        getContent={getContent}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        savePost={savePost}
        cancelCreate={cancelCreate}
      />
    );
  } else if (isEdit) {
    const post = posts.find((post) => {
      return post.id === editId;
    });
    return (
      <Edit
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
      />
    );
  }

  return (
    <div className="container text-center">
      <h2>All Posts</h2>
      <table className="table w-300 mx-auto ">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.length ? (
            posts.map((eachPost) => (
              <Post
                id={eachPost.id}
                key={eachPost.id}
                title={eachPost.title}
                content={eachPost.content}
                editPost={editPost}
                deletePost={deletePost}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                There is nothing to see here!
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={toggleCreate}>
        <i className="fas fa-plus"></i> Create New
      </button>
    </div>
  );
};

export default List;
