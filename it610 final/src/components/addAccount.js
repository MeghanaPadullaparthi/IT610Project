import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Form from 'react-bootstrap/Form'


import button from 'react-bootstrap/Form'

import  {addAccount} from '../actions'
import {connect} from "react-redux";

class AddAccount extends React.Component {
    state = { name: '', balance: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addAccount(this.state.name, this.state.balance);
        this.setState({ name: '', balance: '' });
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center', marginTop:'40px' , color: '#301592', fontWeight:'bold'}}> Add New Account </h1>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{fontWeight:'bold', fontSize: '20px' }}>Name</Form.Label>
                        <Form.Control  placeholder="Enter Name"  value={this.state.name}
                                       onChange={(e) => this.setState({ name: e.target.value })}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{fontWeight:'bold', fontSize: '20px' }}>Balance</Form.Label>
                        <Form.Control placeholder="Enter Balance" value={this.state.balance}
                                      onChange={(e) => this.setState({ balance: e.target.value })} />
                    </Form.Group>


                    <input type="submit" style={{ float: 'center', padding: '10px', color: 'white', borderRadius: '35px', background:'#301592', border:'3px solid white' }} className="btn btn-success" value={ `Add Account ` } />
                </Form>
            </div>

        )
    }

}
export default connect(null, { addAccount})(AddAccount);


