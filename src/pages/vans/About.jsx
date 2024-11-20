import { Link } from "react-router-dom"
import image from '../../assets/about-img.png';
import './About.css';

export default function About() {
    return (
        <main className='about'>
            <figure className='about__image'>
                <img
                    src={image}
                    alt="A man stargazing from the roof of a travel van under a
                    clear night sky"
                />
            </figure>
            <section className='about__info'>
                <h1 className='about__info-title'>
                    Don’t squeeze in a sedan when you could relax in a van.
                </h1>
                <p className='about__info-description'>
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each
                    trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className='about__info-team'>
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
            </section>
            <div className='about__cta'>
                <h2 className='about__cta-title'>
                    Your destination is waiting. Your van is ready.
                </h2>
                <Link className='about__explore-button' to="/vans">Explore our vans</Link>
            </div>
        </main>
    );
}
