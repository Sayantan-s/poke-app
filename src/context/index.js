import React, { createContext, useState } from 'react'
import { CLOSE_MODAL, SHOW_MODAL } from './types';

export const GlobalContext = createContext();

const Store = ({ children }) => {
    const [ modalIsOpen, setModal ] = useState(false);

    const modalReducer = (type) => {
      switch(type){
        case SHOW_MODAL : return setModal(true)
        case CLOSE_MODAL : return setModal(false)
        default : return modalIsOpen
      }
    }

    return (
      <GlobalContext.Provider value={{ modalIsOpen, modalReducer }} >
          {children}
      </GlobalContext.Provider>
    )
}

export default Store
