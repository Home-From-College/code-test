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
            <p>Status: {content.status}</p>
            <img src={content.url}/>
            <div>
              <ActionButtons>
                <button className="reject" onClick={() => handleReject(content.id)}>REJECT</button>
                {content.status === 'approved' ? (
                  <button className="approve-faded" onClick={() => handleApprove(content.id)}>APPROVE</button>
                ) : (
                  <button className="approve" onClick={() => handleApprove(content.id)}>APPROVE</button>
                )}
              </ActionButtons>
            </div>

          </ContentItemWrapper>
        ))}
      </ul>
    </ContentContainerWrapper>
  );
};

export default ContentContainer;