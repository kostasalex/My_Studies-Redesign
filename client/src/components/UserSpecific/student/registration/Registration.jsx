import React from "react";
import NewRegistrationSection from "./NewRegistrationSection";
import OldRegistrations from "./OldRegistrationsSection";
import NewRegistration from "./newRegistration/NewRegistration";
import Path from "../path/path.module.css";

const Registration = () => {
  const [newRegistration, setNewRegistration] = React.useState(false);
  return (
    <div>
      <div className={Path["pathh"]}>
        <button>• Αρχική /</button>
        <button>Δηλώσεις /</button>
      </div>
      {!newRegistration && (
        <div>
          <NewRegistrationSection setNewRegistration={setNewRegistration} />
          <OldRegistrations />
        </div>
      )}
      {newRegistration && <NewRegistration />}
    </div>
  );
};

export default Registration;
