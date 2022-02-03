import React, { useReducer, useState, useEffect } from "react";

import authContext from "./authContext";
import authReducer from "./authReducer";
import { ADD_PREMIO, ADD_WINNER, ADD_TIENDA } from "../../types";
import { getTienda } from "../../api/TiendaApi";
import { getSorteo } from "../../api/SorteoApi";

const AuthState = ({ children }) => {
  const Tienda =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("tienda"))
      : {};
  const premios =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("premios"))
      : [];
  const now = typeof window !== "undefined" ? localStorage.getItem("now") : "";

  let nowSystem = new Date();
  let nowSystemFull = `${nowSystem.getFullYear()}-${nowSystem.getMonth()}-${nowSystem.getDate()}`;

  const initialState = {
    premios: premios,
    winner: {},
    tienda: Tienda,
    now: now,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    console.log("----loader context state--");

    if (state.tienda != null) {
      //si hay tienda
      setPremio(state?.tienda.id);
    }
  }, [state.tienda]);

  const setPremio = async (id) => {
    let now = new Date();
    let nowFull = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

    try {
      const resp = await getSorteo(id);
      console.log("CALL API");
      if (resp != null) {
        if (resp.msg === true) {
          dispatch({
            type: ADD_PREMIO,
            value: resp.data,
          });
          localStorage.setItem("premios", JSON.stringify(resp.data));
          localStorage.setItem("now", nowFull);
        }
      }
    } catch (error) {
      console.log("LOG:", error);
    }
  };

  const setWinner = (data) => {
    dispatch({
      type: ADD_WINNER,
      value: data,
    });
  };

  const setTienda = async (data) => {
    try {
      const response = await getTienda(data);
      if (response.msg === true) {
        dispatch({
          type: ADD_TIENDA,
          value: response.data[0],
        });
        localStorage.setItem("tienda", JSON.stringify(response.data[0]));
      }
    } catch (error) {
      console.log("LOG:", error);
    }
  };

  return (
    <authContext.Provider
      value={{
        premios: state.premios,
        winner: state.winner,
        tienda: state.tienda,
        setWinner,
        setTienda,
        setPremio,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
