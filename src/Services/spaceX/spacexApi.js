const apiURL = 'https://api.spacexdata.com/v3/';

class SpaceXService {
    queryAllResource(category) {
        const queryString = `${apiURL}${category}`;

        return fetch(queryString).then((resp) => resp.json());
    }
}

export default SpaceXService;
