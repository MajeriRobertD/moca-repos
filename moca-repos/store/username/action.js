import { SET_SEARCH, SET_USERNAME}  from "./type";

export const setUsername = (usernameState) => (dispatch) => {

  return dispatch({
    type: SET_USERNAME,
    payload: usernameState,
  });
};


// export const setSearch = (searchState) => (dispatch) => {

//   return dispatch({
//     type: SET_SEARCH,
//     payload: searchState,
//   });
// };