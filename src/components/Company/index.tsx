import BackgroundOverlay from '../common/BackgroundOverlay';

import './Company.css';
import background from './background.jpg';

function Company() {
    return (
        <BackgroundOverlay
            src={background}
        >
            <div
                className="company"
            >
                <h2>
                    Introducing Naeviant Software...
                </h2>
                <br />
                <p>
                    I'm proud to announce that I have founded my own software enginnering company:
                    Naeviant Software.
                </p>
                <p>
                    The company will be creating bespoke websites and desktop software for paying
                    clients, as well as creating some projects of its own for wider use.
                </p>
                <p>
                    For more information, check out the company website
                    {' '}
                    <a
                        href="https://naeviant.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        here
                    </a>
                    .
                </p>
            </div>
        </BackgroundOverlay>
    );
}

export default Company;
