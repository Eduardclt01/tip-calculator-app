import React from "react";

export const AppContext = React.createContext(null);

export const AppContextWrapper = (props) => {
  // ---------- State ----------
  var [state, setState] = React.useState({
    billAmount: 0,
    tipPercentage: 0,
    numberOfPeople: 0,
    calculatedTipPerPersonAmount: 0,
    calculatedTotalAmountPerPerson: 0
  });

  function setBillAmount(amount) {
    setState(function(state) {
      return {
        ...state,
        billAmount: amount
      };
    });
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

  function setCalculatedTipPerPersonAmount(amount) {
    setState(function(state) {
      return {
        ...state,
        calculatedTipPerPersonAmount: amount
      };
    });
  }

  function setCalculatedTotalAmountPerPerson(amount) {
    setState(function(state) {
      return {
        ...state,
        calculatedTotalAmountPerPerson: amount
      };
    });
  }

  function clearCalculatorData(){
    setState(function(state) {
      return {
        ...state,
        billAmount: 0,
        tipPercentage: 0,
        numberOfPeople: 0,
        calculatedTipPerPersonAmount: 0,
        calculatedTotalAmountPerPerson: 0
      };
    });
  }

  const [actions, setAppActions] = React.useState({
    setBillAmount: setBillAmount,
    setNumberOfPeople: setNumberOfPeople,
    setTipPercentage: setTipPercentage,
    setCalculatedTipPerPersonAmount: setCalculatedTipPerPersonAmount,
    setCalculatedTotalAmountPerPerson: setCalculatedTotalAmountPerPerson,
    clearCalculatorData: clearCalculatorData
  });

  return (
    <AppContext.Provider value={{ state, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
