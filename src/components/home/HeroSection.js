import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import {getImage, GatsbyImage, StaticImage} from "gatsby-plugin-image"



const HeroSection = () => {
    return (
        <div className="container-fluid vh-80 position-relative" style={{ backgroundImage: `url('/hero_img.png'` }}>

                <div className="text-center pt-70">
                    <h1 className="font-family-rancho fw-500 fs-70 ">Exquisite Taste <br/>
                        for true <span className="text-primary">Connoissuerus</span></h1>
                    <p>
                        A cake is the important sweet dish that gives a sweet touch to <br/> your celebration. It has become a compulsory part of  <br/> social and religious events.
                    </p>
                    <a href="" className="btn btn-primary btn-site">Explore our Popular</a>
                </div>

                <StaticImage src="../../images/home/hero_img1.png"
                             className="img_hero1" alt="A image title" placeholder="blurred"/>

                <StaticImage src="../../images/home/hero_img2.png"
                             className="img_hero2" alt="A image title" placeholder="blurred"/>

        </div>
    )
}

export default HeroSection