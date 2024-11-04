export default function About() {
    return (
        <main className="about">
            <figure className="about__image">
                <img
                    src="path/to/image.jpg"
                    alt="A man stargazing from the roof of a travel van under a
                    clear night sky"
                />
            </figure>

            <header className="about__header">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            </header>

            <section className="about__content">
                <p>
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each
                    trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p>
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
            </section>
        </main>
    );
}
