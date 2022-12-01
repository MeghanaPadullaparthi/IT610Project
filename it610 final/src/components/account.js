import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getAccountsByID} from '../reducers/accountsreducer'
import {addAccount, addMoney, widhraw, addmoney2, widraw2, editAccount, removeAcct} from "../actions";
import Form from 'react-bootstrap/Form'
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";


class account extends React.Component {


    onAddMoneySubmit = (event) => {

        event.preventDefault();

        this.props.addMoney(this.props.match.params.id, this.state.amount);
        this.props.addmoney2(this.state.accountId, this.state.amount);
        this.setState({accountId:'' , amount: ''});

    }
    onwidMoneySubmit = (event) => {
        event.preventDefault();
        this.props.widhraw(this.props.match.params.id, this.state.amount);
        this.props.widraw2(this.state.accountId, this.state.amount);
        this.setState({accountId:'' , amount: ''});
    }
    onNameSubmit = (event) => {
        event.preventDefault();
        this.props.editAccount(this.state.NewAccountName, this.props.match.params.id);
        this.setState({ NewAccountName: '' });
    }


    renderList() {
        let trans = this.props.transactions;
        let accttrans = [];
        trans.forEach(transaction => {
            if (transaction.accountId == this.props.match.params.id) {
                accttrans.push(transaction)
            }
        });
        return accttrans.map(char => {
            return (
                <tbody>
                <tr style={{backgroundColor: 'white', fontWeight: 'bold'}}>
                    <td style={{backgroundColor: '#301592', fontWeight: 'bold', color: 'white'}}>{char._id}</td>
                    <td> {char.accountId}</td>
                    <td> {char.type}</td>
                    <td> {char.amount}</td>
                    <td> {char.name}</td>
                </tr>
                </tbody>
            );
        })
    }


    render() {
        const trans = this.renderList();
        let a = this.props.accounts;
        let acct = [];
        a.forEach(account => {
            if (account._id == this.props.match.params.id) {
                acct.push(account)
            }
        });

        return(


                <div>
                    <h2 style={{textAlign: 'center', marginTop: '40px', color: '#301592', fontWeight: 'bold'}}> This is the
                        Acount's full detail</h2>
                    <h3 style={{
                        textAlign: 'center',
                        marginTop: '40px',
                        color: '#301592',
                        fontWeight: 'bold'
                    }}> ID: {this.props.match.params.id}</h3>
                    <h3 style={{
                        textAlign: 'center',
                        marginTop: '40px',
                        color: '#301592',
                        fontWeight: 'bold'
                    }}> Name: {acct[0].name} </h3>
                    <h3 style={{textAlign: 'center', marginTop: '40px', color: '#301592', fontWeight: 'bold'}}> Acount
                        Balance: {acct[0].balance} </h3>
                    <Container style={{display: 'flex'}}>
                    <h4 style={{marginLeft:'180px', marginTop: '50px',color: '#301592', fontWeight: 'bold'}}> Deposit
                        Money</h4>

                    <Form onSubmit={this.onAddMoneySubmit} style={{marginLeft: '20px', marginTop:'50px'}}>
                        <Form.Group>
                            <h4 style={{fontWeight: 'bold', fontSize: '20px'}}> Enter ID</h4>
                            <input placeholder="Enter the Account ID" id="accountId"
                                          onChange={(e) => this.setState({accountId: e.target.value})}/>
                            <h4 style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'left'}}> Enter Amount</h4>
                            <input placeholder="Enter the Amount" id="balance"
                                          onChange={(e) => this.setState({amount: e.target.value})}/>


                        </Form.Group>


                        <input type="submit" style={{
                            float: 'center',
                            alignContent: 'center',
                            padding: '10px',
                            color: 'white',
                            borderRadius: '35px',
                            background: '#301592',
                            border: '3px solid white'
                        }} className="btn btn-success" value={`Add Deposit`}/>
                    </Form>
                    </Container>
                    <Container style={{display: 'flex'}} >

                    <h4 style={{marginLeft:'180px', marginTop: '50px',color: '#301592', fontWeight: 'bold'}}> Withdraw
                        Money</h4>

                    <Form onSubmit={this.onwidMoneySubmit} style={{marginLeft: '20px', marginTop:'50px'}}>
                        <Form.Group>
                            <h4 style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'left'}}> Enter ID</h4>
                            <input placeholder="Enter the Acount ID" id="accountId"
                                          onChange={(e) => this.setState({accountId: e.target.value})}/>
                            <h4 style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'left'}}> Enter Amount</h4>
                            <input placeholder="Enter the Amount" id="balance"
                                          onChange={(e) => this.setState({amount: e.target.value})}/>


                        </Form.Group>


                        <input type="submit" style={{
                            float: 'center',
                            alignContent: 'center',
                            padding: '10px',
                            color: 'white',
                            borderRadius: '35px',
                            background: '#301592',
                            border: '3px solid white'
                        }} className="btn btn-success" value={`Withdraw Money`}/>
                    </Form>
                    </Container>
                    <Container style={{display: 'flex'}} >

                        <h4 style={{marginLeft:'180px', marginTop: '50px',color: '#301592', fontWeight: 'bold'}}> Edit Account Name</h4>

                        <Form onSubmit={this.onNameSubmit} style={{marginLeft: '20px', marginTop:'50px'}}>
                            <Form.Group>

                                <h4 style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'left'}}> Enter Name</h4>
                                <input placeholder="Enter name" id="name"
                                       onChange={(e) => this.setState({NewAccountName: e.target.value})}/>


                            </Form.Group>


                            <input type="submit" style={{
                                float: 'center',
                                alignContent: 'center',
                                padding: '10px',
                                color: 'white',
                                borderRadius: '35px',
                                background: '#301592',
                                border: '3px solid white'
                            }} className="btn btn-success" value={`Edit Name`}/>
                        </Form>
                    </Container>

                    <button type='button'
                            onClick={() => { this.props.removeAcct(this.props.match.params.id ) }}
                            className='btn btn-danger'
                            style={{  paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px', paddingLeft: '20px',marginTop:'50px',marginLeft:'350px', color: 'white', borderRadius: '35px' }}>
                        Delete
                    </button>

                    <h1 style={{textAlign: 'center', margin: '40px', color: '#301592', fontWeight: 'bold'}}> List of All
                        Transactions</h1>


                    <Table style={{margin: '10'}} striped bordered hover>

                        <thead>
                        <tr style={{backgroundColor: '#301592', fontWeight: 'bold', color: 'white'}}>
                            <td>ID</td>
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
        accounts: state.accounts.accounts,
        transactions: state.transactions.transactions

    };
};
export default connect(mapStateToProps, { addMoney, widraw2, addmoney2, editAccount,widhraw, removeAcct})(account);

