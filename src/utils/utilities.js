import configData from '../config/config';

const getCryptoData = () => {
    let serverUrl = configData.SERVER_URL;
    let mapEndpoint = configData.ENDPOINT.map;

    fetch(serverUrl + mapEndpoint, {})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))

};

export default {
    getCryptoData
};