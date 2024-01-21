
import file from "../../../../../public/test_doc.pdf";
import CustomButton from "../../../common/buttons/CustomButton.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../../context/LanguageContext.jsx";
import { GradesTexts as TextsEn } from '@/locales/en';
import { GradesTexts as TextsGr } from '@/locales/gr';


const Table = ({ certificates }) => {
  const {language} = useContext(LanguageContext);
  const GradesTexts = language === 'en' ? TextsEn : TextsGr;
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = "uoa_cert.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div>
      <table className="table table-striped mb-1">
        <thead>
          <tr>
            <th style={{ fontSize: '18px' }} scope="col">
              <h5>{GradesTexts.applicationCode}</h5>
            </th>
            <th style={{ fontSize: '18px' }} scope="col">
              <h5>{GradesTexts.subject}</h5>
            </th>
            <th style={{ fontSize: '18px' }} scope="col">
              <h5>{GradesTexts.semester}</h5>
            </th>
            <th style={{ fontSize: '18px' }} scope="col">
              <h5>{GradesTexts.grade}</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate.id}>
              <th
                style={{ color: certificate.grade < 5 ? 'red' : 'black', fontSize: '18px' }}
                scope="row"
              >
                <h5>{certificate.id}</h5>
              </th>
              <td
                style={{ color: certificate.grade < 5 ? 'red' : 'black', fontSize: '18px' }}
              >
                <h5>{GradesTexts.lessons[certificate.lessonID]}</h5>
              </td>
              <td
                style={{ color: certificate.grade < 5 ? 'red' : 'black', fontSize: '18px' }}
              >
                <h5>{GradesTexts.semesters[certificate.semester]}</h5>
              </td>
              <td style={{ color: certificate.grade < 5 ? 'red' : 'black', fontSize: '18px' }}>
                {certificate.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default Table;
