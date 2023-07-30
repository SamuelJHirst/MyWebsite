import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Table,
    TableCell,
    TableRow,
} from '@mui/material';
import {
    GitHub as GitHubIcon,
    OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';

interface ProjectProps {
    dates: string;
    demo: string | null;
    description: string;
    github: string | null;
    image: string | null;
    language: string;
    name: string;
    status: string;
}

function Project(props: ProjectProps) {
    const {
        dates,
        demo,
        description,
        github,
        image,
        language,
        name,
        status,
    } = props;

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
        >
            <Card
                style={{
                    backgroundColor: '#121212',
                    height: '100%',
                }}
            >
                <CardHeader
                    subheader={description}
                    subheaderTypographyProps={{
                        style: {
                            color: '#AAAAAA',
                        }
                    }}
                    title={name}
                    titleTypographyProps={{
                        style: {
                            color: '#EEEEEE',
                        }
                    }}
                />
                <CardMedia
                    alt={name}
                    component="img"
                    image={`/${image}`}
                    style={{
                        color: '#AAAAAA',
                    }}
                />
                <CardContent>
                    <Table>
                        <TableRow>
                            <TableCell
                                style={{
                                    borderBottom: 'none',
                                    color: '#EEEEEE',
                                    padding: '4px',
                                }}
                            >
                                <strong>
                                    Status
                                </strong>
                            </TableCell>
                            <TableCell
                                style={{
                                    borderBottom: 'none',
                                    color: '#EEEEEE',
                                    padding: '4px',
                                }}
                            >
                                {status}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                style={{
                                    borderBottom: 'none',
                                    color: '#EEEEEE',
                                    padding: '4px',
                                }}
                            >
                                <strong>
                                    Language
                                </strong>
                            </TableCell>
                            <TableCell
                                style={{
                                    borderBottom: 'none',
                                    color: '#EEEEEE',
                                    padding: '4px',
                                }}
                            >
                                {language}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                style={{
                                    borderBottom: 'none',
                                    color: '#EEEEEE',
                                    padding: '4px',
                                }}
                            >
                                <strong>
                                    Start/End Date
                                </strong>
                            </TableCell>
                            <TableCell
                                style={{
                                    borderBottom: 'none',
                                    color: '#EEEEEE',
                                    padding: '4px',
                                }}
                            >
                                {dates}
                            </TableCell>
                        </TableRow>
                    </Table>
                </CardContent>
                <CardActions>
                    {
                        github
                            ? (
                                <IconButton
                                    href={github}
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#AAAAAA',
                                    }}
                                    target="_blank"
                                >
                                    <GitHubIcon />
                                </IconButton>
                            )
                            : null
                    }
                    {
                        demo
                            ? (
                                <IconButton
                                    href={demo}
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#AAAAAA',
                                    }}
                                    target="_blank"
                                >
                                    <OpenInNewIcon />
                                </IconButton>
                            )
                            : null
                    }
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Project;