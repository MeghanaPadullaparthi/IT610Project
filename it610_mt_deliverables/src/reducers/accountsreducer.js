import { combineReducers } from 'redux';

const DEFAULT_STATE = {
  "accounts": [
    { "_id": 1, "name": "Kras", "balance": 1199.78 },
    { "_id": 2, "name": "Starks", "balance": 567.71 },
    { "_id": 3, "name": "Baratheons", "balance": 31.26 },
    { "_id": 4, "name": "Targaryens", "balance": 34.75 },
    { "_id": 5, "name": "Greys", "balance": 9.03 },
    { "_id": 6, "name": "Tyrells", "balance": 11433.45 },
    { "_id": 7, "name": "Mars", "balance": 737.90 },
    { "_id": 8, "name": "Tuls", "balance": 483.56 },
    { "_id": 9, "name": "Arrs", "balance": 1035.83 },
    { "_id": 10, "name": "Free Folk", "balance": -134.34 }
  ]




};
const accounts = [
  { "_id": 1, "name": "Kras", "balance": 1199.78 },
  { "_id": 2, "name": "Starks", "balance": 567.71 },
  { "_id": 3, "name": "Baratheons", "balance": 31.26 },
  { "_id": 4, "name": "Targaryens", "balance": 34.75 },
  { "_id": 5, "name": "Greys", "balance": 9.03 },
  { "_id": 6, "name": "Tyrells", "balance": 11433.45 },
  { "_id": 7, "name": "Mars", "balance": 737.90 },
  { "_id": 8, "name": "Tuls", "balance": 483.56 },
  { "_id": 9, "name": "Arrs", "balance": 1035.83 },
  { "_id": 10, "name": "Free Folk", "balance": -134.34 }

];


export const getAccountsByID = (id) => {
  return accounts.filter(account => {
    return account._id == id;
  })
};


const sortAccounts = (state) => {
  let newState = {
    accounts: [ ...state.accounts ],



  };

  newState.accounts.forEach(account => {
  });

  return newState;
};



const accountsReducer = (state, action) => {

  switch (action.type) {
    case 'SET_ACCOUNTS':
      return action.payload;


    case 'ADD_ACCOUNT':
      action.payload.id = state.accounts.length + 1;
      state.accounts.push(action.payload);
      return sortAccounts(state);
    case 'ADD_MONEY':
      let Index= state.accounts.findIndex(char => char._id == action.payload.id);
      state.accounts[Index].balance = parseInt(state.accounts[Index].balance) + parseInt(action.payload['amount']);


      return sortAccounts(state);
    case 'WITHDRAW_MONEY':
      let I= state.accounts.findIndex(char => char._id == action.payload.id);
      state.accounts[I].balance = parseInt(state.accounts[I].balance) - parseInt(action.payload['amount']);

      return sortAccounts(state);

    case 'EDIT_ACCOUNT':
      let acctIndex = state.accounts.findIndex(char => char._id == action.payload['accountId']);
      state.accounts[acctIndex]['name'] = action.payload['name'];
      return sortAccounts(state);




    case 'REMOVE_ACCOUNT':
      const accountIndex = state.accounts.findIndex(char => char.id === action.payload);
      state.accounts.splice(accountIndex, 1);
      return sortAccounts(state);

    default:
      return !state ? sortAccounts(DEFAULT_STATE) : state;
  }
};

export default accountsReducer;
