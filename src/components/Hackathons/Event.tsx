import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Table,
    TableCell,
    TableRow,
} from '@mui/material';

interface EventProps {
    collaborators: string;
    description: string;
    github: string | null;
    image: string | null;
    name: string;
    outcome: string;
}

function Event(props: EventProps) {
    const {
        collaborators,
        description,
        github,
        image,
        name,
        outcome,
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
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <CardHeader
                    subheader={description}
                    subheaderTypographyProps={{
                        style: {
                            color: '#AAAAAA',
                        },
                    }}
                    title={name}
                    titleTypographyProps={{
                        style: {
                            color: '#EEEEEE',
                        },
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
                <CardContent
                    style={{
                        marginTop: 'auto',
                    }}
                >
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
                                    Collaborators
                                </strong>
                            </TableCell>
                            <TableCell
                                style={{
                                    borderBottom: 'none',
                                    color: '#EEEEEE',
                                    padding: '4px',
                                }}
                            >
                                {collaborators}
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
                                    Outcome
                                </strong>
                            </TableCell>
                            <TableCell
                                style={{
                                    borderBottom: 'none',
                                    color: '#EEEEEE',
                                    padding: '4px',
                                    }}
                            >
                                {outcome}
                            </TableCell>
                        </TableRow>
                        {
                            github
                                ? (
                                    <TableRow>
                                        <TableCell
                                            style={{
                                                borderBottom: 'none',
                                                color: '#EEEEEE',
                                                padding: '4px'
                                            }}
                                        >
                                            <strong>
                                                Code
                                            </strong>
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                borderBottom: 'none',
                                                color: '#EEEEEE',
                                                padding: '4px'
                                            }}
                                        >
                                            <a
                                                href={github}
                                                rel="noopener noreferrer"
                                                style={{ color: '#EEEEEE' }}
                                                target="_blank"
                                            >
                                                GitHub
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                )
                                : null
                        }
                    </Table>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Event;