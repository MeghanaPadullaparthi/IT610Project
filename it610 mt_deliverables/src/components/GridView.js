import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Container'
import  {removeAcct} from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GirdView extends React.Component {
  state = { currentPage: '/' }

  isActiveTab(tabName) {
    return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
  }
  onTabClick(event, tabName) {

    this.setState({ currentPage: tabName })
  }

  renderList(){
    let accts  = this.props.accounts;
    return accts.map(char => {
      return (
          <Card  style={{ marginBottom: '20px' ,marginTop: '20px'}}>
            <Card.Body>
              <Card.Title> Account Holder: { char.name }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> ID: {char._id }</Card.Subtitle>
              <Card.Text>
                Balance: ${char.balance }
              </Card.Text>



              <Link className={this.isActiveTab('/account/:id')} to={"/account/"+ char._id} onClick={event => this.onTabClick(event, '/account/:id')}>
                <button style={{  float: 'right', padding: '12px', margin:'10px', color: 'white', borderRadius: '35px', background:'#301592', border:'3px solid white' }} type="button" >View Account</button>
              </Link>
              <button type='button'
                      onClick={() => { this.props.removeAcct(char._id) }}
                      className='btn btn-danger'
                      style={{  paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px', paddingLeft: '20px', color: 'white', borderRadius: '35px' }}>
                Delete
              </button>

            </Card.Body>
          </Card>
      );
    })

  }
  render(){
    const accts= this.renderList();
    return(
    <div>
      <img src={require('./unnamed.jpeg')} alt="Logo" width="99%" height="430" />
      <h3 style={{textAlign:'center', fontSize: '50px', margin: '10px',  color: '#301592', fontWeight: 'bold'}}>WELCOME</h3>
      <p style={{textAlign:'center', fontSize: '25px', margin: '10px', fontWeight: 'bold'}}>View Accounts overview below</p>
      <Container style={{display: 'flex', flexDirection: 'row'}}>
        <Row  style={{  width: '100%',
          padding: '15px',
          border: '2px solid white',
          backgroundColor: '#301592',
          color: 'black'}}>
          {accts}
        </Row>
      </Container>
    </div>


        );

    }
    }




      const mapStateToProps = state => {
        return {
          accounts: state.accounts.accounts,

        };



  };




export default connect(mapStateToProps, {removeAcct})(GirdView);



