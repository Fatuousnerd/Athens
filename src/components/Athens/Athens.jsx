import { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Work from './Work';
import Offer from './Offer';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Athens = () => {

    useEffect(() => {
        document.title = "Arete Funnels - Athens";
    }, []);

    return (
        <>
                <Hero />
                <About />
                <Service />
                <Work />
                <Offer />
                <Testimonials />
                <Footer />
        </>
    )
}

export default Athens