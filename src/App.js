import React, {Component} from 'react';
import './App.css';
import NavBar from "./features/NavBar/components/NavBar";
import CryptoTable from "./features/CryptoTable/components/CryptoTable";
import AddCryptoDropDown from "./features/AddCryptoDropDown/components/AddCryptoDropDown";

class App extends Component {

  render(){
    return(
        <div className="App">
          <NavBar/>
          <CryptoTable/>
          <AddCryptoDropDown/>
        </div>
    )
  }
}

export default App;
