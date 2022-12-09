import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {NextPage} from "next";
import styles from "../../styles/Home.module.css";
import Image from 'next/image'

const ImageCarouselSection: NextPage = () => (
    <section className={styles.container}>
        <Carousel autoPlay={true} infiniteLoop={true} interval={3000} transitionTime={500} stopOnHover={true} showThumbs={false}>
            <div>
                <Image src="/carousel/1.png" alt="AIS Fibre"/>
            </div>
            <div>
                <Image src="/carousel/2.png" alt="AIS Fibre"/>
            </div>
            <div>
                <Image src="/carousel/3.png" alt="AIS Fibre"/>
            </div>
        </Carousel>
    </section>
);

export default ImageCarouselSection;
