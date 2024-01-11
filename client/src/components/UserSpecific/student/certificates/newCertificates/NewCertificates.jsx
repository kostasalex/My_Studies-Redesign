import Card from "./Card";
import styles from "./NewCertificates.module.css";
import { newCertificatesTexts } from '@/locales/gr';
const NewCertificates = () => {
  return (
      <div
          className={`${styles.newCertificates} d-flex flex-column align-items-center`}
          style={{ marginBottom: "20px" }}
      >
        <h3 className="mb-4">{newCertificatesTexts.title}</h3>
        <div className="d-flex">
          {newCertificatesTexts.certificateTypes.map((title, index) => (
              <Card key={index} title={title} />
          ))}
        </div>
      </div>
  );
};

export default NewCertificates;
