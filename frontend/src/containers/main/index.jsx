import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, UserContainer, UsersListContainer } from "./styles";
import { onLoadDashboardUsers } from "../../redux/actions/dashboard-actions";
import { onLoadUserContent } from "../../redux/actions/content-actions";
import ContentContainer from "./ContentContainer";

export const MainContainer = () => {
  const dispatch = useDispatch();
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  const users = useSelector((state) => state.dashboard.users);

  useEffect(() => {
    dispatch(onLoadDashboardUsers());
    // eslint-disable-next-line
  }, []);

  // Let's include an option to hide a user's content so testing isn't as much of a pain
  const handleViewContent = (userId) => {
    setSelectedUserIds((prevSelectedUserIds) =>
      prevSelectedUserIds.includes(userId)
        ? prevSelectedUserIds.filter((id) => id !== userId)
        : [...prevSelectedUserIds, userId]
    );

    dispatch(onLoadUserContent(userId));
  };

  return (
    <Container>
      <UsersListContainer>
        {users.map((user) => (
          <React.Fragment key={`user-${user.id}`}>
            <UserContainer>
              <h1>{user.name}</h1>
              <button onClick={() => handleViewContent(user.id)}>
                {selectedUserIds.includes(user.id) ? "Hide Content" : "View Content"}
              </button>
            </UserContainer>
            {selectedUserIds.includes(user.id) && <ContentContainer userId={user.id} />}
          </React.Fragment>
        ))}
      </UsersListContainer>
    </Container>
  );
};