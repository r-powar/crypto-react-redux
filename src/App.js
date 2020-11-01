import React, {useEffect} from 'react';
import './App.css';
import NavBar from "./features/NavBar/components/NavBar";
import CryptoTable from "./features/CryptoTable/components/CryptoTable";
import AddCryptoDropDown from "./features/AddCryptoDropDown/components/AddCryptoDropDown";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./actions";


const App = () => {
    const dispatch = useDispatch();
    const {isFetching, tableData, dropDownData} = useSelector(state => state);
    useEffect(() => {
        dispatch(fetchData());
    },[dispatch]);

    return(
        <div className="App">
            <NavBar/>
            {isFetching && <h2>Loading....</h2>}
            {!isFetching && <CryptoTable tableData={tableData}/>}
            {!isFetching && <AddCryptoDropDown dropDownData={dropDownData}/>}
        </div>
    )
};


export default App;
