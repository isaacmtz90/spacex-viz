import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Description } from '@material-ui/icons';

const MAX_DESC_LENGTH = 140;
const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export const ContentCard = ({ card, category }) => {
    const classes = useStyles();
    const description =
        card.description && card.description.length > MAX_DESC_LENGTH
            ? `${card.description.substring(0, MAX_DESC_LENGTH)}...`
            : card.description;
    return (
        <Grid item key={'asdf'} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/user/spacex"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                    </Typography>
                    <Typography>{description}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View more
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

ContentCard.propTypes = {
    card: PropTypes.object,
    category: PropTypes.string,
};
