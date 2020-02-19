import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        "position": "relative",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        "height": "80vh",
    },
    card: {
        "position": "relative",
        "display": "flex",
        "flex-direction": "column",
        "width": "75%",
        "max-width": "364px",
        "padding": "24px",
        "background": "white",
        "color": "rgb(14, 30, 37)",
        "border-radius": "8px",
        "box-shadow": "0 2px 4px 0 rgba(14, 30, 37, .64)",
    }
});

export default function GenericNotFound() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4">Page Not Found</Typography>
                </CardContent>
                <CardContent>
                    <Typography>
                        Parece que você usou um link quebrado ou entrou em uma URL que não existe nesse site
                    </Typography>
                    <Link
                        component={RouterLink}
                        to="/">
                        <Typography >> Retornar ao home</Typography>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}