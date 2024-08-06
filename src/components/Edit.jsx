import React from "react";

const Edit = ({
  title,
  content,
  updatePost,
  saveTitleToState,
  saveContentToState,
}) => {
  return (
    <div className="container my-4">
      <h2>Edit Post</h2>
      <form onSubmit={updatePost}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            defaultValue={title}
            onChange={saveTitleToState}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            defaultValue={content}
            onChange={saveContentToState}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <button type="submit" className="btn btn-danger ms-3">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Edit;
