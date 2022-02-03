import {
  ADD_PREMIO,
  UPDATE_PREMIO,
  REMOVE_PREMIO,
  PREMIO,
  ADD_WINNER,
  ADD_TIENDA,
} from "../../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case ADD_PREMIO:
      return {
        ...state,
        premios:  action.value,
      };
    case ADD_WINNER:
      return {
        ...state,
        winner: action.value,
      };
    case ADD_TIENDA:
      return {
        ...state,
        tienda: action.value,
      };

    default:
      return state;
  }
};
export default authReducer;
