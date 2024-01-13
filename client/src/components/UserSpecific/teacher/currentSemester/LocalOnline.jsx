// LocalOnline.jsx
import React from "react";

const LocalOnline = ({ closeModal }) => {
  return (
    <div className="modal-content">
      <h1>Hello World!</h1>
      <p>Αυτό είναι ένα παράδειγμα μηνύματος στο modal.</p>
      <button onClick={closeModal}>Κλείσιμο</button>
    </div>
  );
};

export default LocalOnline;
