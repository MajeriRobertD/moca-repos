import { SET_USERNAME}  from "./type";

export const setUsername = (usernameState) => (dispatch) => {

  return dispatch({
    type: SET_USERNAME,
    payload: usernameState,
  });
};

