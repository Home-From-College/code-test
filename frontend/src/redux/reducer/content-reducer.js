import { ContentActions } from "../action-types/content-action-types";

const initialState = {
  userContents: {},
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
    case ContentActions.UPDATE_CONTENT_STATUS:
      // js complains if we have two consts called userId. Thus, userId2
      // Make sure we keep content loaded and show updated status
      const userId2 = action.payload.userId;
      const userContents = { ...state.userContents };
      const userContentIndex = userContents[userId2].findIndex((content) => content.id === action.payload.id);
      userContents[userId2][userContentIndex] = action.payload;

      return {
        ...state,
        userContents: {
          ...userContents,
        },
      };
    case ContentActions.RESET_USER_CONTENT:
      return initialState;
    default:
      return state;
  }
};