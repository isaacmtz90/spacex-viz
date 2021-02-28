const historyParser = (historyPayload) => {
    return {
        id: `${historyPayload.id}`,
        name: historyPayload.title,
        description: historyPayload.details,
        // eslint-disable-next-line max-len
        description2: `Flight number: ${historyPayload.flight_number}`,
        links: [
            { name: 'wikipedia', url: historyPayload.links?.wikipedia || '' },
            { name: 'article', url: historyPayload.links?.article || '' },
            { name: 'reddit', url: historyPayload.links?.reddit || '' },
        ],
    };
};

export default historyParser;
