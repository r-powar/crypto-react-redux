import {REMOVE_CRYPTO_ITEM, ADD_CRYPTO_ITEM, FETCH_DATA} from "../actions";
import configData from '../config/config';


const initialState = {
    tableData: [],
    dropDownData: [],
    isFetching: true
};

const rootReducer = (state = initialState, action) => {
    if (action.type === REMOVE_CRYPTO_ITEM) {
        let id = action.id;
        let deletedItem = state.tableData.find(data => data.id === id);
        let tableData = state.tableData.filter(data => data.id !== id);
        return {
            ...state,
            tableData,
            dropDownData: [...state.dropDownData, deletedItem]
        }
    }

    if(action.type === ADD_CRYPTO_ITEM){
        let id = action.id;
        let toAddItem = state.dropDownData.find(data => data.id === id);
        let dropDownData = state.dropDownData.filter(data => data.id !== id);
        return {
            ...state,
            tableData: [...state.tableData, toAddItem],
            dropDownData
        }
    }

    if(action.type === FETCH_DATA){
        return {
            ...state,
            isFetching: !state.isFetching,
            tableData: action.data.slice(0, configData.MAX_ITEMS_TABLE),
            dropDownData: action.data.slice(configData.MAX_ITEMS_DROP_DOWN)
        }
    }
    return state;
};

export default rootReducer;