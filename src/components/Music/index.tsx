import './Music.css';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';

function Music() {
    return (
        <BackgroundOverlay src={background} alt="">
            <div className="music">
                <h2>A Work in Progress...</h2>
                <br />
                <p>I am a big fan of music mashups! For those not familiar with what a mashup is, you take the vocals from one song and combine it with the melody of another. I occassionally try to make my own, but so far have had limited success.</p>
                <p>One of those mashups is available on YouTube <a href="https://www.youtube.com/watch?v=sDHElKgd8jI" target="_blank" rel="noreferrer">here</a>. It's not great at the start, but 1:35 onwards isn't too bad!</p>
                <p>I hope to publish more of these here in the future!</p>
            </div>
        </BackgroundOverlay>
    );
}

export default Music;
