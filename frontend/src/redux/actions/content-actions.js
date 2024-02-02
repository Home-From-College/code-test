import { getContentForUser, updateContentStatus } from "../../services/content.service";
import { ContentActions } from "../action-types/content-action-types";

export const onLoadUserContent = (userId) => async (dispatch) => {
  try {
    const response = await getContentForUser(userId);
    const loadedContent = response.data;

    dispatch({ type: ContentActions.SET_USER_CONTENT, payload: { userId, content: loadedContent } });
  } catch (error) {
    console.error(error);
  }
};

export const onUpdateContentStatus = (contentId, status) => async (dispatch) => {
  try {
    const response = await updateContentStatus(contentId, status);
    dispatch({ type: ContentActions.UPDATE_CONTENT_STATUS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};