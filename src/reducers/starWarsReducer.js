import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  err: null,
  isLoading: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  // console.log("reducer", action);
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        err: null,
        isLoading: true
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        isloading: false,
        err: action.payload
      };

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
