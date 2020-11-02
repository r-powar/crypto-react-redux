import React from 'react';
import {useDispatch} from "react-redux";
import {Table} from 'react-materialize';
import {removeCrypto} from "../../../actions";
import PropTypes from 'prop-types';

const CryptoTable = ({tableData}) => {
    const dispatch = useDispatch();

    return (
            <Table className="container" style={{marginTop: "20px"}}>
                <thead>
                <tr>
                    <th>Symbol</th>
                    <th>CMC Rank</th>
                    <th>Price (USD)</th>
                    {tableData.length > 1 ? <th>{''}</th> : null}
                </tr>
                </thead>
                <tbody>
                {tableData.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.symbol}</td>
                            <td>{item.cmc_rank}</td>
                            <td>${item.price}</td>
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

CryptoTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        symbol: PropTypes.string.isRequired,
        cmc_rank: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }))
};


export default CryptoTable;