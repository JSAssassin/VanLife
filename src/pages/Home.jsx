export default function Home() {
    return (
        <main className="home">
            <header className="home__content">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>
                    Add adventure to your life by joining the #vanlife movement.
                    Rent the perfect van to make your perfect road trip.
                </p>
            </header>
            <button
                className="home__button"
                aria-label="Find your ideal van for your road trip"
            >
                Find your van
            </button>
        </main>
    );
}
