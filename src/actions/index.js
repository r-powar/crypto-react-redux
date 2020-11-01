export const removeCrypto = (id) => {
    return{
        type: 'REMOVE_CRYPTO_ITEM',
        id
    }
};

export const addCrypto = (id) => {
    return{
        type: 'ADD_CRYPTO_ITEM',
        id
    }
};
