const Table = ({ onCheckboxChange }) => {

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        const row = event.target.closest('tr');
        if (isChecked) {
            row.classList.add('highlighted-row');
        } else {
            row.classList.remove('highlighted-row');
        }
        onCheckboxChange(isChecked);
    };

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"><h5>Κωδικός Μαθήματος</h5></th>
                        <th scope="col"><h5>Μάθημα</h5></th>
                        <th scope="col"><h5>Εξάμηνο</h5></th>
                        <th scope="col"><h5>Καθηγητής</h5></th>
                        <th scope="col"><h5>Ειδίκευση</h5></th>
                        <th scope="col"><h5>Υποχρεωτικό</h5></th>
                        <th scope="col"><h5>Ects</h5></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><h5>κ14</h5></th>
                        <td><h5>Γραμμική Άλγεβρα</h5></td>
                        <td><h5>1ο</h5></td>
                        <td ><h5>Ράπτης</h5></td>
                        <td><h5>-</h5></td>
                        <td><h5>Nαι</h5></td>
                        <td><h5>6</h5></td>
                        <td><div className="form-check">
                        <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    onChange={handleCheckboxChange} 
                                    id="checkbox1" 
                                />
                        </div></td>
                    </tr>
                    <tr>
                        <th scope="row"><h5>κ15</h5></th>
                        <td><h5>Διακριτά Μαθηματικά</h5></td>
                        <td><h5>1ο</h5></td>
                        <td ><h5>Εμίρης</h5></td>
                        <td><h5>-</h5></td>
                        <td><h5>Nαι</h5></td>
                        <td><h5>6</h5></td>
                        <td><div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    onChange={handleCheckboxChange} 
                                    id="checkbox1" 
                                />
                        </div></td>
                    </tr>
                    <tr>
                        <th scope="row"><h5>κ16</h5></th>
                        <td><h5>Μεταγλωτιστές</h5></td>
                        <td><h5>5ο</h5></td>
                        <td ><h5>Ρουσοπούλου</h5></td>
                        <td><h5>-</h5></td>
                        <td><h5>Nαι</h5></td>
                        <td><h5>8</h5></td>
                        <td><div className="form-check">
                        <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    onChange={handleCheckboxChange} 
                                    id="checkbox1" 
                                />
                        </div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table