import './Home.css';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';

function Home() {
    return (
        <BackgroundOverlay src={background} alt="">
            <div className="home">
                <h1>Hi, I'm Sam.</h1>
                <h2>Welcome to My Website!</h2>
                <br />
                <p>I am a web developer who likes to make stuff! This is my portfolio where I upload my projects - finished, in progress or abandoned.</p>
                <p>Want to know more? Click the About Me button on the sidebar!</p>
            </div>
        </BackgroundOverlay>
    );
}

export default Home;
