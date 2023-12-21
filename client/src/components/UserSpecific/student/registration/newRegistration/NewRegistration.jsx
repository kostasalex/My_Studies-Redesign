import React from "react";
import Table from "./Table"
import { Stepper } from 'react-form-stepper';
const NewRegistration = () => {
    const [selectedCount, setSelectedCount] = React.useState(0);

    const handleCheckboxChange = (isChecked) => {
        setSelectedCount(prevCount => prevCount + (isChecked ? 1 : -1));
    };
    return (

        <div className="d-flex flex-column justify-content-center align-items-center">
            <Stepper
                steps={[{ label: 'Επιλογή μαθημάτων' }, { label: 'Προεπισκόπηση Δήλωσης' }, { label: 'Οριστική Υποβολή' }]}
                activeStep={1}
            />
            <div>
                <div className="btn-group m-5">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Περίοδος
                    </button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Εξάμηνο
                    </button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle m-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ειδίκευση
                    </button>
                </div>
            </div>
            <Table onCheckboxChange={handleCheckboxChange} />
            <div className="d-flex justify-content-center align-items-center">
                <h5 className="p-5">Επιλεγμένα μαθήματα: {selectedCount}</h5>
                <div className="d-flex p-5 ml-5">
                    <button className="btn btn-warning m-3">Προσωρινή Αποθήκευση</button>
                    <button className="btn btn-primary m-3">Επόμενο</button>
                </div>

            </div>
        </div>
    )
}

export default NewRegistration