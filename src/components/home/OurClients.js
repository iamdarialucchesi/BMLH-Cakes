import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const OurClients = () => {
    return (
        <div className="container-fluid bg-light-gray section-padding section-margin">
            <div className="container">
                <div className="text-center">
                    <h1 className="font-family-rancho fw-500">What Our <span
                        className="text-primary">Clients Says</span></h1>
                    <p className="p-site w-lg-75">Let’s see some of our Clients that what are they experiencing and get <br/> their pleasant and hygenic taste.</p>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="card carousel-item active">
                            <div className="card-body">
                                <img src="..." className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card carousel-item">
                            <div className="card-body">
                                <img src="..." className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card carousel-item">
                            <div className="card-body">
                                <img src="..." className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients