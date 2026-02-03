import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Install } from '../components/Install';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Install />
            <Footer />
        </>
    );
};
