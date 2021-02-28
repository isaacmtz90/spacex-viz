const rocketParser = (rocketPayload) => {
    return {
        id: `${rocketPayload.rocket_id}`,
        name: rocketPayload.rocket_name,
        status: rocketPayload.active ? 'Active' : 'Not Active',
        description: rocketPayload.description,
        // eslint-disable-next-line max-len
        description2: `Company: ${rocketPayload.company} | Country: ${rocketPayload.country}`,
        links: [{ name: 'wikipedia', url: rocketPayload.wikipedia || '' }],
    };
};

export default rocketParser;
