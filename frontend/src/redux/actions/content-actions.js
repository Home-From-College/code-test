import { getContentForUser } from "../../services/content.service";
import { ContentActions } from "../action-types/content-action-types";

export const onLoadUserContent = (userId) => async (dispatch) => {
  try {
    const response = await getContentForUser(userId);
    const loadedContent = response.data;

    // Dispatch the action with userId and loadedContent as payload
    dispatch({ type: ContentActions.SET_USER_CONTENT, payload: { userId, content: loadedContent } });
  } catch (error) {
    console.error(error);
  }
};

export const onViewUserContent = () => {
  return { type: ContentActions.RESET_USER_CONTENT };
};