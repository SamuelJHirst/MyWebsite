import BackgroundOverlay from '../common/BackgroundOverlay';

import './About.css';
import background from './background.jpg';

function About() {
    return (
        <BackgroundOverlay src={background} alt="">
            <div className="about">
                <h2>A Bit About Me...</h2>
                <br />
                <p>Right from an early age, I have had an interest in IT and have been working to build on my skills independently. Whether it be using Microsoft Office creatively, or building a website such as this one, most of my knowledge comes from what I have taught myself.</p>
                <p>Many years later, I am now in the third year of my Computer Science degree at The University of Manchester. I have previously worked at the University's Student Software Company, Imago, as a Project Assistant. I was assigned to a project which aims to support visually impaired patients in pharmacies.</p>
                <p>I have also previously worked at Imago on the Cohere project. There, I worked as a front end developer on a project to help make links between different learning activites by taking data from social media sites and displaying relationships in a graph format.</p>
                <p>Elsewhere, I have previously taught on a course which helped young people to learn basic Python skills - which enabled them to progress onto apprenticeships and other routes which helped them to build a career.</p>
                <p>I make use of that experience in my new job in which I help a number of young people with special educational needs and disabilities to learn coding skills at the Digital Independent Skills College in Manchester.</p>
                <p>I also work as a Part Time Undergraduate DevOps Engineer at Arm, as well as running my own software engineering company: Naeviant Software.</p>
                <p>This website is designed to document the projects that I do outside of university and work (although some of that makes it here too). Most of that is Computer Science related, but in the future some music and writing may be uploaded too.</p>
            </div>
        </BackgroundOverlay>
    );
}

export default About;
