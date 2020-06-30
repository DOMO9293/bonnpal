import counterActionTypes from "./counter.types";

const INITAIL_STATE = {
  counter: 0,
};

export const counterReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case counterActionTypes.INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case counterActionTypes.DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};
