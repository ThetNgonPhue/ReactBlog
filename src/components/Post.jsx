import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{content}</td>
      <td>
        <button className="btn btn-success btn-sm me-2" onClick={() => editPost(id)}>
          <FontAwesomeIcon icon={faEdit} /> Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => deletePost(id)}>
          <FontAwesomeIcon icon={faTrash} /> Delete
        </button>
      </td>
    </tr>
  );
};

export default Post;