import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';




import PageTabs from './Pagetabs';
import { BrowserRouter, Route } from 'react-router-dom';
import DeleteAccount from "./deleteAccount"
import AddAccount from "./addAccount";
import GridView from "./GridView";
import ListView from "./translist";
import { setAccounts, settransactions } from "../actions";
import account from "./account"

class App extends React.Component {
  state = { view: 'Home',
    errorText: ''
  };

  componentDidMount() {
    this.getData();
  }
  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
          this.props.setAccounts(response.data);

        }).catch(error => {
    });
    axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/transactions')
        .then(response => {
          this.props.settransactions(response.data);
        }).catch(error => {
    });

  }



  onViewChange(view) {
    this.setState({ view });
  }
  wrapPage(jsx) {
    const { view } = this.state;
    return (
      <div className="container">
        <PageTabs currentView={view}
                  onViewChange={this.onViewChange.bind(this)}/>
        {jsx}
      </div>
    );
  }

  render() {
    return(


          <BrowserRouter>
            <PageTabs />
            <div>
              <Route path="/" exact component={GridView} />
              <Route path="/deleteAccount" component={DeleteAccount} />
              <Route path="/AddAccount" component={AddAccount} />
              <Route path="/ListView" component={ListView} />
                <Route path="/account/:id" component={account} />

            </div>
          </BrowserRouter>



    )
  }

}
const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps, { setAccounts, settransactions })(App);

