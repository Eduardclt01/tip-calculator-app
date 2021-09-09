import React from "react";

export const AppContext = React.createContext(null);

export const AppContextWrapper = (props) => {
  // ---------- State ----------
  var [state, setState] = React.useState({
    billAmount: 0,
    tipPercentage: 0,
    numberOfPeople: 0,
    calculatedTipAmount: 0,
    calculatedTotalAmount: 0
  });

  function setBillAmount(amount) {
    setState(function(state) {
      return {
        ...state,
        billAmount: amount
      };
    });
    console.log('Appcontext.js Amount: ' + amount)
    console.log('Appcontext.js State Amount: ' + state.billAmount)
  }

  function setNumberOfPeople(amount) {
    setState(function(state) {
      return {
        ...state,
        numberOfPeople: amount
      };
    });
  }

  function setTipPercentage(amount) {
    setState(function(state) {
      return {
        ...state,
        tipPercentage: amount
      };
    });
  }

  function setCalculatedTipAmount(amount) {
    setState(function(state) {
      return {
        ...state,
        calculatedTipAmount: amount
      };
    });
  }

  function setCalculatedTotalAmount(amount) {
    setState(function(state) {
      return {
        ...state,
        calculatedTotalAmount: amount
      };
    });
  }

  const [actions, setAppActions] = React.useState({
    setBillAmount: setBillAmount,
    setNumberOfPeople: setNumberOfPeople,
    setTipPercentage: setTipPercentage,
    setCalculatedTotalAmount: setCalculatedTotalAmount,
    setCalculatedTipAmount: setCalculatedTipAmount
  });

  return (
    <AppContext.Provider value={{ state, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};