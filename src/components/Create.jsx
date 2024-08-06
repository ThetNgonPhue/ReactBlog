import React from 'react';

const Create = ({ getTitle, getContent, saveTitleToState, saveContentToState, savePost, cancelCreate }) => {
  return (
    <div className="container my-4">
      <h2>Create New Post</h2>
      <form onSubmit={savePost}>
        <div className="mb-3">
          <input
            ref={getTitle}
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={saveTitleToState}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            ref={getContent}
            className="form-control"
            placeholder="Content"
            onChange={saveContentToState}
            required
          />
        </div>
        <button type="submit" className="btn btn-success me-2">Create Post</button>
        <button type="button" onClick={cancelCreate} className="btn btn-danger">Cancel</button>
      </form>
    </div>
  );
};

export default Create;