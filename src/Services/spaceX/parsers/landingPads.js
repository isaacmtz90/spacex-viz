const landingPadsParser = (landingPadPayload) => {
    return {
        id: `${landingPadPayload.id}`,
        name: landingPadPayload.full_name,
        status: landingPadPayload.status,
        description: landingPadPayload.details,
        // eslint-disable-next-line max-len
        description2: `Location: ${landingPadPayload.location?.name}`,
        links: [{ name: 'wikipedia', url: landingPadPayload.wikipedia || '' }],
    };
};

export default landingPadsParser;
