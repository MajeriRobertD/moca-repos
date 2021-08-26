import { SET_SEARCH, SET_USERNAME } from "./type";

const initialState = {
    server: "",
    client: "",
    username: ' ',
    //search: '',
}
//test
// Creating my reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_USERNAME:
        return { ...state, username: action.payload }
      // case SET_SEARCH:
      //   return { ...state, search: action.payload }
      default:
        return state;
      
    }
  }
  