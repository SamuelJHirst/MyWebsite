import React from 'react';
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
    TableRow
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

interface ProjectProps {
  name: string;
  description: string;
  image: string | null;
  status: string;
  language: string;
  dates: string;
  github: string | null;
  demo: string | null;
}

function Project(props: ProjectProps) {
    const {
        name,
        description,
        image,
        status,
        language,
        dates,
        github,
        demo
    } = props;

    return (
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
            <Card style={{ backgroundColor: '#121212', height: '100%' }}>
                <CardHeader
                    title={name}
                    subheader={description}
                    titleTypographyProps={{
                        style: {
                            color: '#EEEEEE'
                        }
                    }}
                    subheaderTypographyProps={{
                        style: {
                            color: '#AAAAAA'
                        }
                    }}
                />
                <CardMedia 
                    component="img"
                    image={`/${image}`}
                    alt={name}
                    style={{ color: '#AAAAAA' }}
                />
                <CardContent>
                    <Table>
                        <TableRow>
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}><strong>Status</strong></TableCell>
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}>{status}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}><strong>Language</strong></TableCell>
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}>{language}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}><strong>Start/End Date</strong></TableCell>
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}>{dates}</TableCell>
                        </TableRow>
                    </Table>
                </CardContent>
                <CardActions>
                    {
                        github
                        ?
                            <IconButton 
                                href={github} 
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#AAAAAA' }}
                            >
                                <GitHubIcon />
                            </IconButton>
                        : null
                    }
                    {
                        demo
                        ?
                            <IconButton 
                                href={demo} 
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#AAAAAA' }}
                            >
                                <OpenInNewIcon />
                            </IconButton>
                        : null
                    }
                </CardActions>
            </Card>
        </Grid> 
    )
}

export default Project;