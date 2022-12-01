export const settransactions = transactions => {
  return {
    type: 'SET_TRANSACTIONS',
    payload: {
      transactions
    }
  }
};




export const setAccounts = accounts => {

  return {
    type: 'SET_ACCOUNTS',
    payload: {
      accounts
    }
  }
};

export const addAccount = (name, balance) => {
  return {
    type: 'ADD_ACCOUNT',
    payload: {
      name, balance

    }
  }
};
export const addmoney2 = ( accountId, amount) => {
  return {
    type: 'add2_2',
    payload: {
      accountId, type: "deposit", amount, name: "Desposited amount"
    }
  }
};
export const widraw2 = ( accountId, amount) => {
  return {
    type: 'WITHDRAW_2',
    payload: {
      accountId, type: "withraw", amount, name: "withraw amount"
    }
  }
};
export const editAccount = (name, accountId) => {
  return {
    type: 'EDIT_ACCOUNT',
    payload: {
      name,
      accountId
    }
  }
};

export const removeAcct = (accountID) => {
  return {
    type: 'REMOVE_ACCOUNT',
    payload: accountID
  }
};

export const widhraw = (id, amount) => {
  return {
    type: 'WITHDRAW_MONEY',
    payload: {
      amount, id

    }

  };
};
export const addMoney = (id, amount) => {
  return {
    type: 'ADD_MONEY',
    payload: {
      amount, id

    }


  };
};


