const launchesParser = (launchPayload) => {
    return {
        id: `${launchPayload.flight_number}`,
        name: launchPayload.mission_name,
        status: launchPayload.upcoming ? 'Upcoming' : 'Unknown',
        description: launchPayload.details || '---',
        launchDate: launchPayload.launch_date_local,
        // eslint-disable-next-line max-len
        description2: `Rocket: ${launchPayload.rocket?.rocket_name}`,
        links: [
            { name: 'wikipedia', url: launchPayload.links?.wikipedia || '' },
            {
                name: 'article_link',
                url: launchPayload.links?.article_link || '',
            },
            { name: 'video_link', url: launchPayload.links?.youtube_id || '' },
        ],
    };
};

export default launchesParser;
