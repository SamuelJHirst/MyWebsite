import { Avatar, Button, Typography, ButtonGroup, Divider, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Sidebar.css';
import picture from './picture.png';

interface SidebarProps {
    page: number;
    setPage(index: number): void;
    showNavigation(showing: boolean): void;
}

function Sidebar(props: SidebarProps) {
    const { page, setPage, showNavigation } = props;

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
            case 'COMPANY':
                setPage(6);
                break;
            case 'CONTACT':
                setPage(7);
                break;
        }
        showNavigation(false);
    };

    return (
        <div className="sidebar">
            <Avatar src={picture} alt="Sam Hirst" className="image" sx={{ height: '20vh', width: '20vh' }} />
            <Typography variant="h3">Sam Hirst</Typography>
            <div className="email">
                <EmailIcon />
                <a href="mailto:sam@hirst.me">sam@hirst.me</a>
            </div>
            <Divider />
            <ButtonGroup orientation="vertical" color="secondary" className="buttons">
                <Button variant={page === 0 ? 'contained' : 'outlined'} onClick={onClick}>Home</Button>
                <Button variant={page === 1 ? 'contained' : 'outlined'} onClick={onClick}>About Me</Button>
                <Button variant={page === 2 ? 'contained' : 'outlined'} onClick={onClick}>Software</Button>
                {/* <Button variant={page === 3 ? 'contained' : 'outlined'} onClick={onClick}>Music</Button> */}
                <Button variant={page === 4 ? 'contained' : 'outlined'} onClick={onClick}>Hackathons</Button>
                {/* <Button variant={page === 5 ? 'contained' : 'outlined'} onClick={onClick}>Blog</Button> */}
                <Button variant={page === 6 ? 'contained' : 'outlined'} onClick={onClick}>Company</Button>
                <Button variant={page === 7 ? 'contained' : 'outlined'} onClick={onClick}>Contact</Button>
            </ButtonGroup>
            <Divider />
            <div className="icons">
                <IconButton href="https://github.com/SamuelJHirst" className="iconButton" target="_blank" rel="noreferrer">
                    <GitHubIcon className="icon" />
                </IconButton>
                <IconButton href="https://linkedin.com/in/naeviant/" className="iconButton" target="_blank" rel="noreferrer">
                    <LinkedInIcon className="icon" />
                </IconButton>
            </div>
        </div>
    );
}

export default Sidebar;
