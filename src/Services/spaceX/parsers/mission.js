const missionParser = (missionPayload) => {
    return {
        id: `${missionPayload.mission_id}`,
        name: missionPayload.mission_name,
        description: missionPayload.description,
        // eslint-disable-next-line max-len
        description2: `Manufacturers: ${missionPayload.manufacturers.join(
            ',',
        )}`,
        links: [
            { name: 'wikipedia', url: missionPayload.wikipedia || '' },
            { name: 'website', url: missionPayload.website || '' },
            { name: 'twitter', url: missionPayload.twitter || '' },
        ],
    };
};

export default missionParser;
