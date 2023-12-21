import "./styles.css"

const Stepper = () => {
    return (
        <div>
            <div className="container">
                <div className="accordion" id="accordionExample">
                    <div className="steps">
                        <progress id="progress" ></progress>
                        <div className="step-item">
                            <button className="step-button text-center" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1
                            </button>
                            <div className="step-title text-color-success">
                                First Step
                            </div>
                        </div>
                        <div className="step-item">
                            <button className="step-button text-center collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2
                            </button>
                            <div className="step-title">
                                Second Step
                            </div>
                        </div>
                        <div className="step-item">
                            <button className="step-button text-center collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3
                            </button>
                            <div className="step-title">
                                Third Step
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div id="headingOne">
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="card-body">
                                your content goes here...
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div id="headingTwo">

                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="card-body">
                                your content goes here...
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div id="headingThree">

                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="card-body">
                                your content goes here...
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Stepper