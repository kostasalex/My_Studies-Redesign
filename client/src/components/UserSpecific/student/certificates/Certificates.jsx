import Pagination from "../../../common/Pagination";
import NewCertificates from "./newCertificates/NewCertificates";
import OldCertificates from "./oldCertificates/OldCertificates";

const Certificates = () => {
  return (
    <div className="d-flex flex-column align-items-center m-5">
      <NewCertificates />
      <div className="align-self-start">
        <div className="btn-group m-5 ">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Περίοδος
          </button>
        </div>
        <div className="btn-group  align-self-start">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Έτος
          </button>
        </div>
      </div>
      <OldCertificates />
      <Pagination />
    </div>
  );
};

export default Certificates;
