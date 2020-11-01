import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Dropdown, Button, Divider} from "react-materialize";
import {addCrypto} from "../../../actions";

const AddCryptoDropDown = () => {
    const {dropDownData} = useSelector(state => state);
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
                        <>
                            <a href="#" onClick={() => dispatch(addCrypto(item.id))} key={item.id}>{item.name}</a>
                            <Divider/>
                        </>
                    )
                })}
            </Dropdown>
            : null
    )
};

export default AddCryptoDropDown;