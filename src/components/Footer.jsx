import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer__text">
                <span
                    className='copyright-symbol'
                >
                    &copy;
                </span> { currentYear } #VANLIFE
            </p>
        </footer>
    );
}
