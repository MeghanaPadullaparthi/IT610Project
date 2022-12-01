import { combineReducers } from 'redux';
import accountsReducer from './accountsreducer';
import transreducer from './transreducer';

export default combineReducers({
    accounts: accountsReducer,
    transactions: transreducer
}
);

