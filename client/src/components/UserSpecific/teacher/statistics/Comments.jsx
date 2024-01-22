import React, { useState } from "react";
import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([
    { id: 1, user: "Αλέξανδρος", text: "Πολύ καλό μάθημα, ευχαριστώ!" },
    { id: 2, user: "Μαρία", text: "Ενδιαφέρον θέμα, αλλά αρκετά προκλητικό." },
    { id: 3, user: "Δημήτρης", text: "Ο καθηγητής είναι πολύ κατατοπιστικός." },
    {
      id: 4,
      user: "Σοφία",
      text: "Θα ήθελα περισσότερα παραδείγματα κατανόησης.",
    },
    { id: 5, user: "Νίκος", text: "Δύσκολο, αλλά πολύ ενδιαφέρον." },
  ]);

  return (
    <div>
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
