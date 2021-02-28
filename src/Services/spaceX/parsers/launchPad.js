const launchPadParser = (launchPadPayload) => {
    return {
        id: `${launchPadPayload.id}`,
        name: launchPadPayload.site_name_long,
        status: launchPadPayload.status,
        description: launchPadPayload.details,
        // eslint-disable-next-line max-len
        description2: `Launch Attempts: ${launchPadPayload.attempted_launches}
                       Launch Success: ${launchPadPayload.successful_launches}`,
        links: [{ name: 'wikipedia', url: launchPadPayload.wikipedia || '' }],
    };
};

export default launchPadParser;
