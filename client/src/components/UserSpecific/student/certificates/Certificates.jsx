import React from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";

import Pagination from "../../../common/Pagination";
import NewCertificates from "./newCertificates/NewCertificates";
import OldCertificates from "./oldCertificates/OldCertificates";

const Certificates = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1999 },
    (_, index) => currentYear - index
  );

  return (
    <div className="d-flex flex-column align-items-center m-5">
      <NewCertificates />
      <div className="align-self-start">
        <Dropdown as={ButtonGroup} size="lg" className="m-1">
          <Dropdown.Toggle variant="primary" id="period-dropdown">
            Θέμα Αίτησης
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Φοιτητικής Ιδιότητας</Dropdown.Item>
            <Dropdown.Item>Φορολογικής Χρήσης</Dropdown.Item>
            <Dropdown.Item>Αναλυτική Βαθμολογία</Dropdown.Item>
            <Dropdown.Item>Στρατολογική Χρήση</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown as={ButtonGroup} size="lg" className="m-1">
          <Dropdown.Toggle variant="primary" id="status-dropdown">
            Κατάσταση Αίτησης
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Εγκρίθηκε</Dropdown.Item>
            <Dropdown.Item>Σε αναμονή</Dropdown.Item>
            <Dropdown.Item>Απορίφθηκε</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown as={ButtonGroup} size="lg" className="m-1">
          <Dropdown.Toggle variant="primary" id="year-dropdown">
            Έτος Αιτήματος
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {years.map((year) => (
              <Dropdown.Item key={year}>{year}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <OldCertificates />
      <Pagination />
    </div>
  );
};

export default Certificates;
