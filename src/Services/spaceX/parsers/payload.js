const payloadParser = (payloadPayload) => {
    return {
        id: `${payloadPayload.payload_id}`,
        name: payloadPayload.payload_id,
        // eslint-disable-next-line max-len
        description: `${payloadPayload.payload_type}, ${payloadPayload.nationality}, ${payloadPayload.manufacturer} `,
        description2: `Customers: ${payloadPayload.customers.join(',')}`,
    };
};

export default payloadParser;
