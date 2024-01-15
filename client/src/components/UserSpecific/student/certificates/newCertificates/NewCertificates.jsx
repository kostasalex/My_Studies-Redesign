import Card from "./Card";
import styles from "./NewCertificates.module.css";

import {useContext} from "react";
import {LanguageContext} from "../../../../../context/LanguageContext.jsx";
import { newCertificatesTexts as TextsEn } from '@/locales/en';
import { newCertificatesTexts as TextsGr } from '@/locales/gr';
const NewCertificates = () => {
    const {language} = useContext(LanguageContext);
    const newCertificatesTexts = language === 'en' ? TextsEn : TextsGr;
  return (

      <div
          className={`${styles.newCertificates} d-flex flex-column align-items-center`}
          style={{ marginBottom: "20px" }}
      >
        <h3 className="mb-2">{newCertificatesTexts.title}</h3>
        <div className="d-flex">
          {newCertificatesTexts.certificateTypes.map((title, index) => (
              <Card key={index} title={title} />
          ))}
        </div>
      </div>
  );
};

export default NewCertificates;
