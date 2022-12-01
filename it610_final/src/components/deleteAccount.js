import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Form from 'react-bootstrap/Form'


import button from 'react-bootstrap/Form'

import  {removeAcct} from '../actions'
import {connect} from "react-redux";



class DeleteAccount extends React.Component {
    state = { accountID: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.removeAcct(this.state._id);
        this.setState({ accountID: ''});
    };
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center', marginTop:'40px' , color: '#301592', fontWeight:'bold'}}> Delete Account </h1>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{fontWeight:'bold', fontSize: '20px' }}> Enter Id</Form.Label>
                        <Form.Control  placeholder="Enter ID"  value={this.state._id}
                                       onChange={(e) => this.setState({ accountID: e.target.value })}/>

                    </Form.Group>



                    <input type="submit" style={{ float: 'center', padding: '10px', color: 'white', borderRadius: '35px', background:'#301592', border:'3px solid white' }} className="btn btn-success" value={ `Delete Account ` } />
                </Form>
            </div>

        );
    }


}



export default connect(null, { removeAcct })(DeleteAccount);

