// content-reducer.js

import { ContentActions } from "../action-types/content-action-types";

const initialState = {
  userContents: {}, // Object to store content for each user
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ContentActions.SET_USER_CONTENT:
      const { userId, content } = action.payload;
      return {
        ...state,
        userContents: {
          ...state.userContents,
          [userId]: content,
        },
      };
    case ContentActions.RESET_USER_CONTENT:
      return initialState;
    default:
      return state;
  }
};