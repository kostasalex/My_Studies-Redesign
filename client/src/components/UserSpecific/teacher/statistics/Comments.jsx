import React, { useState } from "react";
import "./Comments.css";

const Comments = ({ comments }) => {

  return (
    <div className="p-3">
      <h2>Σχόλια Φοιτητών για το Μάθημα</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <strong>{comment.user}:</strong> {comment.text}
        </div>
      ))}
    </div>
  );
};

export default Comments;
