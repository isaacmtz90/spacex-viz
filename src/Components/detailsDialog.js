import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export const DetailsDialog = ({ content, open, handleClose }) => {
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                {content.name}
            </DialogTitle>
            <DialogContent dividers>
                {content.status && (
                    <Typography gutterBottom>
                        {' '}
                        <b>Status</b>: {content.status}
                    </Typography>
                )}
                {content.launchDate && (
                    <Typography gutterBottom>
                        {' '}
                        <b>Launch Date:</b>{' '}
                        {new Date(content.launchDate).toLocaleDateString(
                            'en-US',
                        )}
                    </Typography>
                )}
                <Typography gutterBottom>{content.description}</Typography>
                {content.description2 && (
                    <Typography gutterBottom>{content.description2}</Typography>
                )}
                {content.missions && (
                    <Typography variant="h6" component="h6">
                        Missions:
                    </Typography>
                )}
                {content.missions &&
                    content.missions.map((mission) => (
                        <div key={mission.name}>
                            <Typography gutterBottom>
                                - {mission.name} | Flight: {mission.flight}
                            </Typography>
                        </div>
                    ))}
                {content.links && (
                    <Typography variant="h6" component="h6">
                        Links:
                    </Typography>
                )}
                {content.links &&
                    content.links //Filter out empty/null links, then display each of them
                        .filter((link) => link.url !== null && link.url !== '')
                        .map((link) => (
                            <div key={link.name}>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={link.url}
                                >
                                    {link.name}
                                </a>
                            </div>
                        ))}
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

DetailsDialog.propTypes = {
    content: PropTypes.object,
    open: PropTypes.boolean,
    handleClose: PropTypes.func,
};
