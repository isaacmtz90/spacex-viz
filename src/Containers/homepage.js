import React, { ReactElement, useState } from 'react';
import { PageHeader } from '../Components/header';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { categories } from '../Services/spaceX/spacexApiCategories';
import { useAsyncSpaceXResources } from '../Hooks/useSpaceXResource';
import { CardGrid } from '../Components/cardGrid';
import { DetailsDialog } from '../Components/detailsDialog';

const useStyles = makeStyles((theme) => ({
    mainContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
}));

export default function SpaceX() {
    const classes = useStyles();
    const [category, setCategory] = useState('rockets');
    const [cardItems, setCardItems] = useState([]);
    const [selectedCard, setSelectedCard] = useState({});
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleDialogOpen = (card) => {
        setSelectedCard(card);
        setOpenDialog(true);
    };
    const handleClose = () => {
        setOpenDialog(false);
        setSelectedCard({});
    };
    const isLoading = useAsyncSpaceXResources(category, setCardItems);
    return (
        <React.Fragment>
            <CssBaseline />
            <PageHeader />
            <main>
                <div className={classes.mainContent}>
                    <Container maxWidth="md">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            SpaceX Reader
                        </Typography>
                        <ButtonGroup
                            color="primary"
                            aria-label="outlined primary button group"
                        >
                            {categories.map(({ display, id }) => (
                                <Button
                                    disabled={id === category}
                                    onClick={() => setCategory(id)}
                                    key={id}
                                >
                                    {display}
                                </Button>
                            ))}
                        </ButtonGroup>
                        {!isLoading && (
                            <CardGrid
                                cards={cardItems}
                                selectedCategory={category}
                                handleCardSelection={handleDialogOpen}
                            />
                        )}
                        {isLoading && <LinearProgress />}
                    </Container>
                </div>
                <DetailsDialog
                    open={openDialog}
                    handleClose={handleClose}
                    content={selectedCard}
                ></DetailsDialog>
            </main>
        </React.Fragment>
    );
}
