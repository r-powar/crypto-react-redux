import {getCryptoData} from "../utils/utilities";

export const REMOVE_CRYPTO_ITEM = 'REMOVE_CRYPTO_ITEM';
export const ADD_CRYPTO_ITEM = 'ADD_CRYPTO_ITEM';
export const FETCH_DATA = 'FETCH_DATA';

export const removeCrypto = (id) => {
    return{
        type: REMOVE_CRYPTO_ITEM,
        id
    }
};

export const addCrypto = (id) => {
    return{
        type: ADD_CRYPTO_ITEM,
        id
    }
};

export const fetchData = () => {
    return async (dispatch) => {
        let data = await getCryptoData();
        if (data.length) {
            dispatch({
                type: FETCH_DATA,
                data
            })
        }
    }
};

