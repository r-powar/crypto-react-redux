import React from 'react';
import {useDispatch} from "react-redux";
import {Dropdown, Button, Divider} from "react-materialize";
import {addCrypto} from "../../../actions";

const AddCryptoDropDown = ({dropDownData}) => {
    const dispatch = useDispatch();

    return (
        dropDownData.length ?
            <Dropdown
                id="Dropdown_6"
                options={{
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                }}
                trigger={<Button node="button" style={{marginTop: "30px"}}>Add Crypto</Button>}
            >
                {dropDownData.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <a href="#" onClick={() => dispatch(addCrypto(item.id))}>{item.name}</a>
                            <Divider/>
                        </React.Fragment>
                    )
                })}
            </Dropdown>
            : null
    )
};

export default AddCryptoDropDown;