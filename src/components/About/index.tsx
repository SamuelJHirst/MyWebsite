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
        <p>Many years later, I am now in the second year of my Computer Science degree at The University of Manchester. Alongside this, I am also part of the Computer Science society, UniCS, at the University as a member of the development team. Currently, I am helping to create the online platform to support its Hackathon event in November 2021.</p>
        <p>I have previously been employed as a Project Assistant at Imago Software. There, I worked as a front end developer on a project to help make links between different learning activites by taking data from social media sites and displaying relationships in a graph format.</p>
        <p>Currently, I work as a teaching assistant on a course which helps young people to learn basic Python skills - which will enable them to progress onto apprenticeships and other routes which will help them build a career.</p>
        <p>In the future, I would like to work as a web or software developer. I will soon be looking for a placement for my industrial experience year, and am looking forward to the experience that it will bring.</p>
        <p>This website is designed to document the projects that I do outside of university and work (although some of that makes it here too). Most of that is Computer Science related, but occassionally some music and writing will be uploaded too.</p>
      </div>
    </BackgroundOverlay>
  );
}

export default About;
