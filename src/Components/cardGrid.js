import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { ContentCard } from './card';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

export const CardGrid = ({ cards, selectedCategory, handleCardSelection }) => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <ContentCard
                        key={card.id}
                        card={card}
                        category={selectedCategory}
                        handleCardSelection={handleCardSelection}
                    />
                ))}
            </Grid>
        </Container>
    );
};

CardGrid.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    selectedCategory: PropTypes.string,
    handleCardSelection: PropTypes.func,
};
