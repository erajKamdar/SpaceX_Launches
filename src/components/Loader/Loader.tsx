import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '35px'
    },
    Loader: {
        color: 'white'
    }
}));

export function Progress() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.Loader} />
            <br />
            Please Wait...
        </div>
    );
}