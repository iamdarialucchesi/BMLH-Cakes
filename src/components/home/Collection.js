import * as React from "react";
import {StaticImage} from "gatsby-plugin-image"


const Collection = () => {
    return (
        <div className="container-fluid bg-white section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 align-self-center">
                        <h1 className="font-family-rancho fw-500">Our Trending <span
                            className="text-primary">Collection</span></h1>
                        <p className="p-site">A cake is the important sweet dish that gives a sweet touch to your
                            celebration. It has become a compulsory part.</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-6 align-self-center text-lg-end">
                        <a href="" className="btn btn-primary btn-site fs-14">See All Collection</a>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card text-center">
                            <StaticImage src="../../images/home/collection/collection_img1.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <p className="mb-0">Buttermilk-Respberry</p>
                                <p className="fs-12">Starting: <span
                                    className="text-primary fs-15 fw-bold ms-1"> $500.00</span></p>
                                <a href="#" className="btn btn-primary-light w-100 rounded-1">See Collection</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card text-center">
                            <StaticImage src="../../images/home/collection/collection_img2.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <p className="mb-0">Buttermilk-Respberry</p>
                                <p className="fs-12">Starting: <span
                                    className="text-primary fs-15 fw-bold ms-1"> $500.00</span></p>
                                <a href="#" className="btn btn-primary-light w-100 rounded-1">See Collection</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card text-center">
                            <StaticImage src="../../images/home/collection/collection_img3.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <p className="mb-0">Buttermilk-Respberry</p>
                                <p className="fs-12">Starting: <span
                                    className="text-primary fs-15 fw-bold ms-1"> $500.00</span></p>
                                <a href="#" className="btn btn-primary-light w-100 rounded-1">See Collection</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card text-center">
                            <StaticImage src="../../images/home/collection/collection_img4.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <p className="mb-0">Buttermilk-Respberry</p>
                                <p className="fs-12">Starting: <span
                                    className="text-primary fs-15 fw-bold ms-1"> $500.00</span></p>
                                <a href="#" className="btn btn-primary-light w-100 rounded-1">See Collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection