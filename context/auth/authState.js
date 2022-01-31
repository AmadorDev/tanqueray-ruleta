import React, { useReducer, useState, useEffect } from "react";

import authContext from "./authContext";
import authReducer from "./authReducer";
import { ADD_PREMIO, ADD_WINNER } from "../../types";

const AuthState = ({ children }) => {
  const initialState = {
    premios: [
      { id: "1", value: 7220, status: true, subtitle: "Cooler" ,url:'/images/cooler.png' ,title:'¡GANASTE!' ,quality:1},
      { id: "2", value: 6570, status: true, subtitle: "SIGUE INTENTANDO GRACIAS POR TU PREFERENCIA " ,url:'/images/looser.png', title:'¡OOPS!',quality:''},
      { id: "3", value: 8510, status: true, subtitle: "Reposadera",url:'/images/repo.png' ,title:'¡GANASTE!',quality:1},
      { id: "4", value: 8210, status: true, subtitle: "Visera",url:'/images/visera.png',title:'¡GANASTE!' ,quality:1},
      { id: "5", value: 7580, status: true, subtitle: "Cooler" ,url:'/images/cooler.png',title:'¡GANASTE!',quality:1},
      { id: "6", value: 8510, status: true, subtitle: "Reposadera",url:'/images/repo.png' ,title:'¡GANASTE!',quality:1},
      { id: "7", value: 7850, status: true, subtitle: "Visera" ,url:'/images/visera.png' ,title:'¡GANASTE!',quality:1},
      { id: "8", value: 7290, status: true, subtitle: "SIGUE INTENTANDO GRACIAS POR TU PREFERENCIA",url:'/images/looser.png' ,title:'¡OOPS!',quality:''},
       { id: "9", value: 9350, status: true, subtitle: "COPA ACRILICA" ,url:'/images/copa_orange.png', title:'¡GANASTE!',quality:1},
      { id: "10", value: 9490, status: true, subtitle: "COPA ACRILICA",url:'/images/copa_green.png', title:'¡GANASTE!',quality:1 },
    ],
    winner: {},
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const addPremio = (data) => {
    dispatch({
      type: ADD_PREMIO,
      value: data,
    });
  };

  const setWinner = (data) => {
    dispatch({
      type: ADD_WINNER,
      value: data,
    });
  };

  return (
    <authContext.Provider
      value={{
        premios: state.premios,
        winner: state.winner,
        addPremio,
        setWinner,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
