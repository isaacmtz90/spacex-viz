import { useEffect, useState } from 'react';
import { parsers } from '../Services/spaceX/parsers/index';
import SpaceXService from '../Services/spaceX/spacexApi';

/**
 *
 * @param {*} category : Selected category of objects
 * @param {*} setCardItems: function that will assign the fetched resources to a state
 * @returns boolean: A value that will define if the service is done fetching
 */
export const useAsyncSpaceXResources = (category, setCardItems) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        let subscribed = true;
        const fetchSpacexData = async () => {
            setIsLoading(true);
            if (category) {
                const spacexService = new SpaceXService();
                const responseValue = await spacexService.queryAllResource(
                    category,
                );
                if (responseValue.length) {
                    const parsingFn = parsers[category];
                    const parsedValues = responseValue.map((item) =>
                        parsingFn(item),
                    );
                    setCardItems(parsedValues);
                }
            }
            setIsLoading(false);
        };
        if (subscribed && category) {
            fetchSpacexData();
        }
        return () => {
            subscribed = false;
        };
    }, [setIsLoading, setCardItems, category]);
    return isLoading;
};
