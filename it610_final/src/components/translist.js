import React from 'react';
import { connect } from 'react-redux';
import Card from "react-bootstrap/Card";

import Table from "react-bootstrap/Table";

class ListView extends React.Component {
    renderList() {
        let trans = this.props.transactions;
        return trans.map(char => {
            return (
                <tbody>
                <tr style={{ backgroundColor: 'white', fontWeight:'bold'}}  >
                    <td style={{ backgroundColor: '#301592', fontWeight:'bold', color: 'white'}}>{char._id}</td>
                    <td> {char.accountId}</td>
                    <td> {char.type}</td>
                    <td> {char.amount}</td>

                    <td> {char.name}</td>

                </tr>
                </tbody>

            );
        })
    }
    render(){
        const trans= this.renderList();
        return(

            <div  >
                <h1 style={{ textAlign: 'center', margin:'40px' , color: '#301592', fontWeight:'bold'}} > List of All Transactions</h1>

                <Table style={{ margin:'10'}}  striped bordered hover  >

                    <thead >
                    <tr style={{ backgroundColor: '#301592', fontWeight:'bold', color: 'white'}} >
                        <td >ID</td>
                        <td>Account ID</td>
                        <td>Type of Transaction</td>
                        <td>Amount</td>
                        <td>Name</td>

                    </tr>
                    </thead>
                    {trans}
                </Table>

            </div>
        )


    }


}
const mapStateToProps = state => {
    return {
        transactions: state.transactions.transactions

    };
};

export default connect(mapStateToProps)(ListView);