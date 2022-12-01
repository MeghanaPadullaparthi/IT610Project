import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';

import { Nav, NavItem, NavLink} from 'react-bootstrap';


class Pagetabs extends React.Component {
    state = { currentPage: '/' }

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }
    onTabClick(event, tabName) {

        this.setState({ currentPage: tabName })
    }

    render () {
        return (
            <div>
            <Nav>
                <Nav.Item>
                    <Link className={this.isActiveTab('/')} to="/" onClick={event => this.onTabClick(event, '/')} >Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className={this.isActiveTab('/ListView')} to="/ListView" onClick={event => this.onTabClick(event, '/ListView')}>
                        Transactions
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link  className={this.isActiveTab('/AddAccount')} to="/AddAccount" onClick={event => this.onTabClick(event, '/AddAccount')} >Add Acount</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className={this.isActiveTab('/deleteAccount')} to="/deleteAccount" onClick={event => this.onTabClick(event, '/deleteAccount')}>Delete Account</Link>
                </Nav.Item>

            </Nav>
                 </div>
        )
};
}

export default Pagetabs;
