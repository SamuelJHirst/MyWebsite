import {
    Email as EmailIcon,
} from '@mui/icons-material';

import BackgroundOverlay from '../common/BackgroundOverlay';

import './Contact.css';
import background from './background.jpg';

function Contact() {
    return (
        <BackgroundOverlay
            src={background}
        >
            <div
                className="contact"
            >
                <h1>
                    Can I help?
                </h1>
                <h2>
                    Let me know if I can!
                </h2>
                <br />
                <p>
                    My contact details are included in the sidebar on the left. I'd recommend
                    emailing me over using social media.
                </p>
                <p>
                    Whether you have a question or need some advice - or have a project you'd
                    like me to undertake - I'd love to hear from you!
                </p>
                <br />
                <div
                    className="email"
                >
                    <EmailIcon />
                    <a
                        href="mailto:sam@hirst.me"
                    >
                        sam@hirst.me
                    </a>
                </div>
            </div>
        </BackgroundOverlay>
    );
}

export default Contact;
