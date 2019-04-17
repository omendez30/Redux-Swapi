import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: ""

  // Array characters, Boolean fetching, null erroror.
};
export const charsReducer = (state = initialState, action) => {
  // console.log("reducer", action);
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        fetching: true,
        error: ""
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        error: "",
        fetching: false,
        characters: action.payload
      };
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
