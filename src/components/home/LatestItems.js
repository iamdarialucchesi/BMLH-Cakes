import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const LatestItems = () => {
    return (
        <div className="container-fluid bg-light-gray section-padding">
            <div className="container">
                <div className="text-center">
                    <h1 className="font-family-rancho fw-500">Our Latest <span
                        className="text-primary">Items</span></h1>
                    <p className="p-site w-lg-75">For more than 25 years, our team have been making favorite baked <br/> goods the
                        old-fashioned way: from scratch, in small batches.</p>

                    <ul className="nav justify-content-center latest-items-nav mt-4 mb-5">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Butter Cake</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Buttermilk Cake</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Chiffon Cake</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Angel Food Cake</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Chiffon Cake</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Genoise Cake</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Baked Flour Cake</a>
                        </li>
                    </ul>

                </div>

                <div className="row my-4">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <StaticImage src="../../images/home/items/1.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <h5 className="card-title">Banana Cake</h5>
                                <p className="p-site">3 cup all purpose flour | 4 egg | 2 teas-poon baking soda | 2 teaspoon vanilla essence</p>
                                <h6 className="text-primary fw-bold">$500.00</h6>
                                <div className="row mt-3">
                                    <div className="col-9 pe-0">
                                        <a href="#!" className="btn btn-primary-light w-100 rounded-1">Add to Cart</a>
                                    </div>
                                    <div className="col-3 ps-0 text-end">
                                        <a href="#!" className="btn border">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <StaticImage src="../../images/home/items/2.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <h5 className="card-title">Banana Cake</h5>
                                <p className="p-site">3 cup all purpose flour | 4 egg | 2 teas-poon baking soda | 2 teaspoon vanilla essence</p>
                                <h6 className="text-primary fw-bold">$500.00</h6>
                                <div className="row mt-3">
                                    <div className="col-9 pe-0">
                                        <a href="#!" className="btn btn-primary-light w-100 rounded-1">Add to Cart</a>
                                    </div>
                                    <div className="col-3 ps-0 text-end">
                                        <a href="#!" className="btn border">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <StaticImage src="../../images/home/items/3.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <h5 className="card-title">Banana Cake</h5>
                                <p className="p-site">3 cup all purpose flour | 4 egg | 2 teas-poon baking soda | 2 teaspoon vanilla essence</p>
                                <h6 className="text-primary fw-bold">$500.00</h6>
                                <div className="row mt-3">
                                    <div className="col-9 pe-0">
                                        <a href="#!" className="btn btn-primary-light w-100 rounded-1">Add to Cart</a>
                                    </div>
                                    <div className="col-3 ps-0 text-end">
                                        <a href="#!" className="btn border">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <StaticImage src="../../images/home/items/4.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <h5 className="card-title">Banana Cake</h5>
                                <p className="p-site">3 cup all purpose flour | 4 egg | 2 teas-poon baking soda | 2 teaspoon vanilla essence</p>
                                <h6 className="text-primary fw-bold">$500.00</h6>
                                <div className="row mt-3">
                                    <div className="col-9 pe-0">
                                        <a href="#!" className="btn btn-primary-light w-100 rounded-1">Add to Cart</a>
                                    </div>
                                    <div className="col-3 ps-0 text-end">
                                        <a href="#!" className="btn border">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <StaticImage src="../../images/home/items/5.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <h5 className="card-title">Banana Cake</h5>
                                <p className="p-site">3 cup all purpose flour | 4 egg | 2 teas-poon baking soda | 2 teaspoon vanilla essence</p>
                                <h6 className="text-primary fw-bold">$500.00</h6>
                                <div className="row mt-3">
                                    <div className="col-9 pe-0">
                                        <a href="#!" className="btn btn-primary-light w-100 rounded-1">Add to Cart</a>
                                    </div>
                                    <div className="col-3 ps-0 text-end">
                                        <a href="#!" className="btn border">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <StaticImage src="../../images/home/items/6.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <h5 className="card-title">Banana Cake</h5>
                                <p className="p-site">3 cup all purpose flour | 4 egg | 2 teas-poon baking soda | 2 teaspoon vanilla essence</p>
                                <h6 className="text-primary fw-bold">$500.00</h6>
                                <div className="row mt-3">
                                    <div className="col-9 pe-0">
                                        <a href="#!" className="btn btn-primary-light w-100 rounded-1">Add to Cart</a>
                                    </div>
                                    <div className="col-3 ps-0 text-end">
                                        <a href="#!" className="btn border">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <StaticImage src="../../images/home/items/8.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <h5 className="card-title">Banana Cake</h5>
                                <p className="p-site">3 cup all purpose flour | 4 egg | 2 teas-poon baking soda | 2 teaspoon vanilla essence</p>
                                <h6 className="text-primary fw-bold">$500.00</h6>
                                <div className="row mt-3">
                                    <div className="col-9 pe-0">
                                        <a href="#!" className="btn btn-primary-light w-100 rounded-1">Add to Cart</a>
                                    </div>
                                    <div className="col-3 ps-0 text-end">
                                        <a href="#!" className="btn border">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <div className="card">
                            <StaticImage src="../../images/home/items/7.png"
                                         className="rounded-top img-fluid" alt="A image title" placeholder="blurred"/>
                            <div className="card-body">
                                <h5 className="card-title">Banana Cake</h5>
                                <p className="p-site">3 cup all purpose flour | 4 egg | 2 teas-poon baking soda | 2 teaspoon vanilla essence</p>
                                <h6 className="text-primary fw-bold">$500.00</h6>
                                <div className="row mt-3">
                                    <div className="col-9 pe-0">
                                        <a href="#!" className="btn btn-primary-light w-100 rounded-1">Add to Cart</a>
                                    </div>
                                    <div className="col-3 ps-0 text-end">
                                        <a href="#!" className="btn border">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="btn btn-primary btn-site">See All Items</button>
                </div>

            </div>
        </div>
    )
}

export default LatestItems