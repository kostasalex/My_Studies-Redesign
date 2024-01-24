import { useNavigate } from 'react-router-dom';

const RegistrationStatus = () => {
    const navigate = useNavigate();
    const savedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
    const finalSubmission = JSON.parse(localStorage.getItem('finalSubmission'));

    const handleOpenTemporarySavedCourses = () => {
        navigate(`/student/registration/new-registration?step=1`);
    };

    const handleDeleteFinalSubmission = () => {
        localStorage.removeItem('finalSubmission');
        navigate('/student');
    };
    console.log(savedCourses)

    return (
        <>
            {(savedCourses?.length || finalSubmission) &&
                <div className="card w-50 mx-auto">
                    <div className="card-body">
                        {finalSubmission ? (
                            <div>
                                <h5 className="card-title">Τελική Υποβολή</h5>
                                <p className="card-text">Δηλώσατε επιτυχώς Μαθήματα για το τρέχον εξάμηνο!</p>
                                <button className="btn btn-danger" onClick={handleDeleteFinalSubmission}>Διαγραφή</button>
                            </div>
                        ) : (
                            <div>
                                <h5 className="card-title">Αποθηκευμένη Δήλωση</h5>
                                <p className="card-text">Έχετε αποθηκευμένη δήλωση με {savedCourses.length} μαθήματα.</p>
                                <button className="btn btn-primary" onClick={handleOpenTemporarySavedCourses}>Προβολή</button>
                            </div>
                        )}
                    </div>
                </div>
            }
        </>

    );
};

export default RegistrationStatus;



RegistrationStatus