
import NewRegistrationSection from "./NewRegistrationSection";
import OldRegistrations from "./OldRegistrationsSection";
import RegistrationStatus from "../RegistrationStatus"; // Import the new component

const Registration = () => {

  const savedCourses = JSON.parse(localStorage.getItem('selectedCourses'));
  const finalSubmission = JSON.parse(localStorage.getItem('finalSubmission'));
  return (
    <div>
      <RegistrationStatus />
      {!(savedCourses || finalSubmission) &&

        <NewRegistrationSection />
      }
      <OldRegistrations />
    </div>
  );
};

export default Registration;
