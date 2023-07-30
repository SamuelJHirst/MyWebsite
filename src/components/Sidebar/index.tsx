import {
    Avatar,
    Button,
    ButtonGroup,
    Divider,
    IconButton,
    Typography,
} from '@mui/material';
import {
    // Email as EmailIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import './Sidebar.css';
import picture from './picture.png';

interface SidebarProps {
    page: number;
    setPage(index: number): void;
    showNavigation(showing: boolean): void;
}

function Sidebar(props: SidebarProps) {
    const {
        page,
        setPage,
        showNavigation,
    } = props;

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
        <div
            className="sidebar"
        >
            <Avatar
                alt=""
                className="image"
                src={picture}
                sx={{
                    height: '20vh',
                    width: '20vh',
                }}
            />
            <Typography
                variant="h3"
            >
                Sam Hirst
            </Typography>
            {/* <div
                className="email"
            >
                <EmailIcon />
                <a
                    href="mailto:sam@hirst.me"
                >
                    sam@hirst.me
                </a>
            </div> */}
            <Divider />
            <ButtonGroup
                className="buttons"
                color="secondary"
                orientation="vertical"
            >
                <Button
                    onClick={onClick}
                    variant={page === 0 ? 'contained' : 'outlined'}
                >
                    Home
                </Button>
                <Button
                    onClick={onClick}
                    variant={page === 1 ? 'contained' : 'outlined'}
                >
                    About Me
                </Button>
                <Button
                    onClick={onClick}
                    variant={page === 2 ? 'contained' : 'outlined'}
                >
                    Software
                </Button>
                {/* <Button
                    onClick={onClick}
                    variant={page === 3 ? 'contained' : 'outlined'}
                >
                    Music
                </Button> */}
                <Button
                    onClick={onClick}
                    variant={page === 4 ? 'contained' : 'outlined'}
                >
                    Hackathons
                </Button>
                {/* <Button
                    onClick={onClick}
                    variant={page === 5 ? 'contained' : 'outlined'}
                >
                    Blog
                </Button> */}
                {/* <Button
                    onClick={onClick}
                    variant={page === 6 ? 'contained' : 'outlined'}
                >
                    Company
                </Button> */}
                {/* <Button
                    onClick={onClick}
                    variant={page === 7 ? 'contained' : 'outlined'}
                >
                    Contact
                </Button> */}
            </ButtonGroup>
            <Divider />
            <div
                className="icons"
            >
                <IconButton
                    className="iconButton"
                    href="https://github.com/SamuelJHirst"
                    rel="noreferrer"
                    target="_blank"
                >
                    <GitHubIcon
                        className="icon"
                    />
                </IconButton>
                <IconButton
                    className="iconButton"
                    href="https://linkedin.com/in/naeviant/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <LinkedInIcon
                        className="icon"
                    />
                </IconButton>
            </div>
        </div>
    );
}

export default Sidebar;
