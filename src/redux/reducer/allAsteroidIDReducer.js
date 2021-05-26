import { ASTEROID_ID ,GET_ALL_ASTEROID} from "../action/actionType";

const initial_state = {
  error: null,
};

export const ALlAsteroidReducer = (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ASTEROID_ID:
      return {
        ...state,
        ...payload,
      };
    case GET_ALL_ASTEROID:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
