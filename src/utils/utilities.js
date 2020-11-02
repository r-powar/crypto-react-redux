import configData from '../config/config';

const getCryptoData = () => {
    let serverUrl = configData.SERVER_URL;
    let mapEndpoint = configData.ENDPOINT.map;
    let quotesEndpoint = configData.ENDPOINT.quotes;

    return fetch(serverUrl + mapEndpoint + '?limit='`${configData.DATA_LIMIT}`)
        .then(response => response.json())
        .then(response => {
            let listIds = [];
            const {data} = response;
            data.forEach((item) => listIds.push(item.id));

            return fetch(serverUrl + quotesEndpoint + '?id='`${listIds.join()}`)
        })
        .then(response => response.json())
        .then(response => {
            let finalData = [];
            for(let key in response.data){
                const {id, cmc_rank, symbol, name, quote:{USD:{price}}} = response.data[key];
                const obj = {
                    id,
                    cmc_rank,
                    symbol,
                    name,
                    price
                };

                finalData.push(obj);
            }
            return finalData;
        })
        .catch(err => console.error(err))

};

export {
    getCryptoData
};