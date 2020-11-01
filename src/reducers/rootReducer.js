const initialState = {
    tableData: [
        {
            id: 1,
            cmcRank: 1,
            symbol: 'BTC',
            name: 'Bitcoin',
            price: '13000'
        },
        {
            id: 2,
            cmcRank: 12,
            symbol: 'TC',
            name: 'True Coin',
            price: '100'
        },
        {
            id: 3,
            cmcRank: 232,
            symbol: 'SCL',
            name: 'Slash Coin',
            price: '130'
        },
        {
            id: 4,
            cmcRank: 123,
            symbol: 'LiteC',
            name: 'Lite Coin',
            price: '89'
        },
        {
            id: 5,
            cmcRank: 29,
            symbol: 'VVC',
            name: 'VV Coin',
            price: '0.453'
        }],
    dropDownData: [
        {
            id: 6,
            cmcRank: 89,
            symbol: 'GC',
            name: 'GCoin',
            price: '0.99'
        },
        {
            id: 7,
            cmcRank: 23,
            symbol: 'FCT',
            name: 'FCoin',
            price: '0.342'
        },
        {
            id: 8,
            cmcRank: 14,
            symbol: 'AC',
            name: 'ACoin',
            price: '0.231'
        },
        {
            id: 9,
            cmcRank: 78,
            symbol: 'EC',
            name: 'ECoin',
            price: '30'
        },
        {
            id: 10,
            cmcRank: 100,
            symbol: 'RC',
            name: 'RCoin',
            price: '0.3423'
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    if (action.type === 'REMOVE_CRYPTO_ITEM') {
        let id = action.id;
        let deletedItem = state.tableData.find(data => data.id === id);
        let tableData = state.tableData.filter(data => data.id !== id);
        return {
            ...state,
            tableData,
            dropDownData: [...state.dropDownData, deletedItem]
        }
    }
    if(action.type === 'ADD_CRYPTO_ITEM'){
        let id = action.id;
        let toAddItem = state.dropDownData.find(data => data.id === id);
        let dropDownData = state.dropDownData.filter(data => data.id !== id);
        return {
            ...state,
            tableData: [...state.tableData, toAddItem],
            dropDownData
        }
    }
    return state;
};

export default rootReducer;