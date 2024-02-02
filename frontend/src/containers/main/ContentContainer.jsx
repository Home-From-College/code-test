import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentContainerWrapper, ContentItemWrapper, ActionButtons } from "./styles";
import { onLoadUserContent, onUpdateContentStatus } from "../../redux/actions/content-actions";

const ContentContainer = ({ userId }) => {
  const dispatch = useDispatch();
  const userContents = useSelector((state) => state.content.userContents);

  useEffect(() => {
    dispatch(onLoadUserContent(userId));
    // eslint-disable-next-line
  }, [userId]);

  const contentForUser = userContents[userId] || [];

  const handleReject = (contentId) => {
    dispatch(onUpdateContentStatus(contentId, "rejected"));
  };

  const handleApprove = (contentId) => {
    dispatch(onUpdateContentStatus(contentId, "approved"));
  };

  return (
    <ContentContainerWrapper>
      <ul>
        {contentForUser.map((content) => (
          <ContentItemWrapper key={content.id}>
            <div>
              <p>Status: {content.status}</p>
            </div>
            <img src={content.url} alt={`Content ${content.id}`} />
            <ActionButtons>
              <button className="reject" onClick={() => handleReject(content.id)}>REJECT</button>
              <button className="approve" onClick={() => handleApprove(content.id)}>APPROVE</button>
            </ActionButtons>
          </ContentItemWrapper>
        ))}
      </ul>
    </ContentContainerWrapper>
  );
};

export default ContentContainer;