import { Avatar, Button, Typography, makeStyles, ButtonGroup, Divider, IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import picture from './picture.png';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#FFF',
    '& > *': {
      marginTop: 20,
    },
  },
  image: {
    width: '20vh',
    height: '20vh',
  },
  email: {
    '& > *': { 
      fontSize: '150%',
    },
    '& > a': {
      marginLeft: 10,
      position: 'relative',
      top: '-5px',
      color: '#FFF',
      textDecoration: 'none',
      transition: 'ease all 200ms',
    },
    '& > a:hover': {
      color: '#AAA',
    },
  },
  buttons: {
    width: '50%',
  },
  icons: {
    textAlign: 'center',
  },
  icon: {
    fontSize: '200%',
  },
  iconButton: {
    color: '#FFF',
    transition: 'ease all 200ms',
    '&:hover': {
      color: '#AAA',
    }
  },
});

interface SidebarProps {
  page: number;
  setPage(index: number): void;
  showNavigation(showing: boolean): void;
}

function Sidebar(props: SidebarProps) {
  const { page, setPage, showNavigation } = props;
  const styles = useStyles();

  const onClick = (e: any) => {
    switch (e.target.innerText) {
      case 'HOME':
        setPage(0);
        break;
      case 'ABOUT ME':
        setPage(1);
        break;
      case 'SOFTWARE':
        setPage(2);
        break;
      case 'MUSIC':
        setPage(3);
        break;
      case 'HACKATHONS':
        setPage(4);
        break; 
      case 'BLOG':
        setPage(5);
        break; 
      case 'CONTACT':
        setPage(6);
        break;            
    }
    showNavigation(false);
  };

  return (
    <div className={styles.root}>
      <Avatar src={picture} alt="Sam Hirst" className={styles.image} />
      <Typography variant="h3">Sam Hirst</Typography>
      <div className={styles.email}>
        <EmailIcon />
        <a href="mailto:sam@hirst.me">sam@hirst.me</a>
      </div>
      <Divider />
      <ButtonGroup orientation="vertical" color="secondary" className={styles.buttons}>
        <Button variant={page === 0 ? 'contained' : 'outlined'} onClick={onClick}>Home</Button>
        <Button variant={page === 1 ? 'contained' : 'outlined'} onClick={onClick}>About Me</Button>
        <Button variant={page === 2 ? 'contained' : 'outlined'} onClick={onClick}>Software</Button>
        <Button variant={page === 3 ? 'contained' : 'outlined'} onClick={onClick}>Music</Button>
        <Button variant={page === 4 ? 'contained' : 'outlined'} onClick={onClick}>Hackathons</Button>
        <Button variant={page === 5 ? 'contained' : 'outlined'} onClick={onClick}>Blog</Button>
        <Button variant={page === 6 ? 'contained' : 'outlined'} onClick={onClick}>Contact</Button>
      </ButtonGroup>
      <Divider />
      <div className={styles.icons}> 
        <IconButton href="https://github.com/Naeviant" className={styles.iconButton} target="_blank" rel="noreferrer">
          <GitHubIcon className={styles.icon} />
        </IconButton>
        <IconButton href="https://twitter.com/Naeviant" className={styles.iconButton} target="_blank" rel="noreferrer">
          <TwitterIcon className={styles.icon} />
        </IconButton>
        <IconButton href="https://linkedin.com/in/naeviant/" className={styles.iconButton} target="_blank" rel="noreferrer">
          <LinkedInIcon className={styles.icon} />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
