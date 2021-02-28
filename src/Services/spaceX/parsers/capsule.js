const capsuleParser = (capsulePayload) => {
    return {
        id: `${capsulePayload.capsule_id}${capsulePayload.capsule_serial}`,
        name: capsulePayload.capsule_serial,
        status: capsulePayload.status,
        // eslint-disable-next-line max-len
        description: `Details: ${capsulePayload.details || '---'} | Type:${
            capsulePayload.type || '---'
        }`,
        description2: `Landings: ${capsulePayload.landings}`,
        launchDate: capsulePayload.original_launch,
        missions: capsulePayload.missions,
    };
};

export default capsuleParser;
