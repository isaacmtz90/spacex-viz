const coreParser = (corePayload) => {
    return {
        id: corePayload.core_serial,
        name: corePayload.core_serial,
        status: corePayload.status,
        // eslint-disable-next-line max-len
        description: `${corePayload.details || '---'}`,
        description2: `Reuses: ${corePayload.reuse_count}`,
        launchDate: corePayload.original_launch,
        missions: corePayload.missions,
    };
};

export default coreParser;
