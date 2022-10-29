import React from 'react';
import { 
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Table,
    TableCell,
    TableRow
} from '@material-ui/core';

interface EventProps {
  name: string;
  description: string;
  image: string | null;
  collaborators: string;
  outcome: string;
  github: string | null;
}

function Event(props: EventProps) {
    const {
        name,
        description,
        image,
        collaborators,
        outcome,
        github
    } = props;

    return (
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
            <Card style={{
                justifyContent: 'center',
                backgroundColor: '#121212',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}>
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
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}><strong>Collaborators</strong></TableCell>
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}>{collaborators}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}><strong>Outcome</strong></TableCell>
                            <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}>{outcome}</TableCell>
                        </TableRow>
                        {
                            github
                                ?
                                    <TableRow>
                                        <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}><strong>Code</strong></TableCell>
                                        <TableCell style={{ borderBottom: 'none', color: '#EEEEEE', padding: '4px' }}>
                                            <a href={github} rel="noopener noreferrer" style={{ color: '#EEEEEE' }} target="_blank">GitHub</a>
                                        </TableCell>
                                    </TableRow>
                                :   null
                        }
                    </Table>
                </CardContent>
            </Card>
        </Grid> 
    )
}

export default Event;