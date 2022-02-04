import { makeStyles } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';

const useStyles = makeStyles({
  root: {
    overflow: 'auto',
    padding: 16,
    '& > h2': {
      fontSize: '2rem',
      marginTop: 0,
      marginBottom: 0,
    },
    '& > *': {
      maxWidth: '75%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function About() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="Scottish Parliament">
      <div className={styles.root}>
        <h2>A Bit About Me...</h2>
        <br />
        <p>Right from an early age, I have had an interest in IT and have been working to build on my skills independently. Whether it be using Microsoft Office creatively, or building a website such as this one, most of my knowledge comes from what I have taught myself.</p>
        <p>Many years later, I am now in the second year of my Computer Science degree at The University of Manchester. I also work at the University's Student Software Company, Imago, as a Project Assistant. I am assigned to a project which will be supporting visually impaired patients in pharmacies.</p>
        <p>I have also previously worked at Imago on the Cohere project. There, I worked as a front end developer on a project to help make links between different learning activites by taking data from social media sites and displaying relationships in a graph format.</p>
        <p>Elsewhere, I currently teach on a course which helps young people to learn basic Python skills - which will enable them to progress onto apprenticeships and other routes which will help them build a career.</p>
        <p>In the future, I would like to work as a web or software developer. I have been looking for a summer internship and soon I will be looking for a placement for my industrial experience year. I am looking forward to the experience that these placements will bring.</p>
        <p>This website is designed to document the projects that I do outside of university and work (although some of that makes it here too). Most of that is Computer Science related, but occassionally some music and writing will be uploaded too.</p>
      </div>
    </BackgroundOverlay>
  );
}

export default About;
