import { SET_USERNAME } from "./type";

const initialState = {
    server: "",
    client: "",
    username: ' ',
}
//test
// Creating my reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_USERNAME:
        return { ...state, username: action.payload }
      default:
        return state;
    }
  }
  