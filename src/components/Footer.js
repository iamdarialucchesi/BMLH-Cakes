import * as React from "react";

const Footer = () => {
    return (
        <div className="bg-primary py-2">
            <div className="container text-white">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center">
                        <p className="mb-0">© 2022 BMLH. All Copyright Reserved</p>
                    </div>
                    <div className="col-12 col-md-6 align-self-center text-lg-end">
                        <div className="btn-group">
                            <a href="" className="btn text-white">Privacy Policy</a>
                            <a href="" className="btn text-white">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer