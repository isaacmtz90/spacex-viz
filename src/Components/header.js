import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import PublicIcon from '@material-ui/icons/Public';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));

export const PageHeader = () => {
    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                <PublicIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    SpaceX API visualizer
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
