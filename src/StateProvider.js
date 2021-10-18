import React, { createContext, useContext, useReducer } from 'react';

// Prepare the React Context API
export const StateContext = createContext();

// Wrap the app and provide the React Context API
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from React Context API
export const useStateValue = () => useContext(StateContext);
