const shipParser = (shipPayload) => {
    return {
        id: `${shipPayload.ship_id}`,
        name: shipPayload.ship_name,
        status: shipPayload.status,
        // eslint-disable-next-line max-len
        description: `Type: ${shipPayload.ship_type} | Port: ${shipPayload.home_port}`,
        // eslint-disable-next-line max-len
        description2: `Roles: ${shipPayload.roles.join(',')}`,
        missions: shipPayload.missions,
        links: [{ name: 'website', url: shipPayload.url || '' }],
    };
};

export default shipParser;
