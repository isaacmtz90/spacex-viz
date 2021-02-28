const dragonParser = (dragonPayload) => {
    return {
        id: dragonPayload.id,
        name: dragonPayload.name,
        status: dragonPayload.active ? 'Active' : 'Unknown',
        description: dragonPayload.description,
        // eslint-disable-next-line max-len
        description2: `Diameter: ${dragonPayload.diameter?.meters} | Orbit duration (years) ${dragonPayload.orbit_duration_yr}`,
        links: [{ name: 'wikipedia', url: dragonPayload.wikipedia }],
    };
};

export default dragonParser;
