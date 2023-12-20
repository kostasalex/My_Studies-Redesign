
const Table = () => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"><h5>Κωδικός Aίτησης</h5></th>
                        <th scope="col"><h5>Θέμα Αίτησης</h5></th>
                        <th scope="col"><h5>Ημερομηνία Αίτησης</h5></th>
                        <th scope="col"><h5>Κατάσταση Αίτησης</h5></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><h5>12314</h5></th>
                        <td><h5>Φοιτητικής Ιδιότητας</h5></td>
                        <td><h5>18/01/2023</h5></td>
                        <td className="text-warning"><h5>Σε αναμονή</h5></td>
                        <td><button disabled className="btn btn-secondary">Προβολή</button></td>
                    </tr>
                    <tr>
                        <th scope="row"><h5>34534</h5></th>
                        <td><h5>Φορολογικής Χρήσης</h5></td>
                        <td><h5>19/01/2023</h5></td>
                        <td className="text-success"><h5>Εγκρίθηκε</h5></td>
                        <td><button className="btn btn-secondary">Προβολή</button></td>
                    </tr>
                    <tr>
                        <th scope="row"><h5>24242</h5></th>
                        <td><h5>Αναλυτική Βαθμολογία</h5></td>
                        <td><h5>20/10/2023</h5></td>
                        <td className="text-danger"><h5>Απορίφθηκε</h5></td>
                        <td><button className="btn btn-secondary">Προβολή</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table