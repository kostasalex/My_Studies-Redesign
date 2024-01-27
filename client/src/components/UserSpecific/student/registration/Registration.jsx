
import OldRegistrations from "./OldRegistrationsSection";
import RegistrationStatus from "../RegistrationStatus";

const Registration = () => {

  const savedCourses = JSON.parse(localStorage.getItem('selectedCourses'));
  const finalSubmission = JSON.parse(localStorage.getItem('finalSubmission'));
  return (
    <div>
      <RegistrationStatus />
      <OldRegistrations />
    </div>
  );
};

export default Registration;
