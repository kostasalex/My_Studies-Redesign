import NewCertificates from "./newCertificates/NewCertificates";
import OldCertificates from "./oldCertificates/OldCertificates";
import Path from "../path/path.module.css";
import { certificatesTexts } from '@/locales/gr';

const Certificates = () => {
  return (
      <div>
        <div className={Path.pathh}>
          <button>• {certificatesTexts.home} /</button>
          <button>{certificatesTexts.certificates} /</button>
        </div>
        <div className="d-flex flex-column align-items-center m-3">
          <NewCertificates />
          <OldCertificates />
        </div>
      </div>
  );
};

export default Certificates;
