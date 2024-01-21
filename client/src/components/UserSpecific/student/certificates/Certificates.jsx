import NewCertificates from "./newCertificates/NewCertificates";
import OldCertificates from "./oldCertificates/OldCertificates";


const Certificates = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center m-3">
        <NewCertificates />
        <OldCertificates />
      </div>
    </div>
  );
};

export default Certificates;
