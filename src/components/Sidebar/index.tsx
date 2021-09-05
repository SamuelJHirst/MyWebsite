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
    width: '28vh',
    height: '28vh',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    fontSize: '250%',
  },
  iconButton: {
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    color: '#FFF',
    transition: 'ease all 200ms',
    '&:hover': {
      color: '#AAA',
    }
  },
});

interface SidebarProps {
  setPage(index: number): void;
}

function Sidebar(props: SidebarProps) {
  const { setPage } = props;
  const styles = useStyles();

  const onClick = (e: any) => {
    switch (e.target.innerText) {
      case 'HOME':
        setPage(0);
        break;
      case 'ABOUT ME':
        setPage(1);
        break;
      case 'PROJECTS':
        setPage(2);
        break;
      case 'BLOG':
        setPage(3);
        break; 
      case 'CONTACT':
        setPage(4);
        break;            
    }
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
        <Button onClick={onClick}>Home</Button>
        <Button onClick={onClick}>About Me</Button>
        <Button onClick={onClick}>Projects</Button>
        <Button onClick={onClick}>Blog</Button>
        <Button onClick={onClick}>Contact</Button>
      </ButtonGroup>
      <Divider />
      <div className={styles.icons}> 
        <IconButton href="https://github.com/Naeviant" className={styles.iconButton}>
          <GitHubIcon className={styles.icon} />
        </IconButton>
        <IconButton href="https://twitter.com/Naeviant" className={styles.iconButton}>
          <TwitterIcon className={styles.icon} />
        </IconButton>
        <IconButton href="https://linkedin.com/in/naeviant/" className={styles.iconButton}>
          <LinkedInIcon className={styles.icon} />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
