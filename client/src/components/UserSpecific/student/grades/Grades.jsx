import Pagination from "@/components/common/Pagination"
import Table from "./table/Table"


const Grades = () => {
    return (
        <div>
            <div>
                <div className="btn-group m-5">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Περίοδος
                    </button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Έτος
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
                <h4>Χειμερινό 2013</h4>
                <button className="btn btn-primary">Κατέβασε εδώ</button>
            </div>
            <Table />
            <div className="d-flex justify-content-between mb-3 mt-5">
                <h4>Εαρινό 2013</h4>
            </div>
                <Table />
            <div className="d-flex justify-content-center mt-5">
                <Pagination/>
            </div>
        </div>
    )
}

export default Grades