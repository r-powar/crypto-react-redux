import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Table} from 'react-materialize';
import {removeCrypto} from "../../../actions";

const CryptoTable = () => {
    const {tableData} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
            <Table className="container" style={{marginTop: "20px"}}>
                <thead>
                <tr>
                    <th>Symbol</th>
                    <th>CMC Rank</th>
                    <th>Price</th>
                    {tableData.length > 1 ? <th>{''}</th> : null}
                </tr>
                </thead>
                <tbody>
                {tableData.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.symbol}</td>
                            <td>{item.cmcRank}</td>
                            <td>{item.price}</td>
                            {tableData.length > 1 ?
                                <td onClick={() => dispatch(removeCrypto(item.id))}>
                                    <a href="#" className="waves-effect waves-light btn">Remove</a>
                                </td> : null}
                        </tr>
                    )
                })}
                </tbody>
            </Table>
    )
};

export default CryptoTable;