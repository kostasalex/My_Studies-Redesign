import { oldCertificatesTexts } from '@/locales/gr';
import file from "../../../../../../public/test_doc.pdf";

const Table = ({ certificates }) => {
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
        <table className="table table-striped">
          <thead>
          <tr>
            <th scope="col"><h5>{oldCertificatesTexts.applicationCode}</h5></th>
            <th scope="col"><h5>{oldCertificatesTexts.subject}</h5></th>
            <th scope="col"><h5>{oldCertificatesTexts.date}</h5></th>
            <th scope="col"><h5>{oldCertificatesTexts.status}</h5></th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          {certificates.map(certificate => (
              <tr key={certificate.id}>
                <th scope="row"><h5>{certificate.id}</h5></th>
                <td><h5>{oldCertificatesTexts.types[certificate.typeId]}</h5></td>
                <td><h5>{certificate.issuedDate}</h5></td>
                <td className={getStatusClass(certificate.statusId)}>
                  <h5>{oldCertificatesTexts.statuses[certificate.statusId]}</h5></td>
                <td>
                  <button onClick={handleDownload} className="btn btn-primary">
                    {oldCertificatesTexts.btnshow}
                  </button>
                </td>

              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

const getStatusClass = (statusId) => {
  switch (statusId) {
    case 1: return "text-success";
    case 2: return "text-warning";
    case 3: return "text-danger";
    default: return "";
  }
};

export default Table;
