import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, UserContainer, UsersListContainer } from "./styles";
import { onLoadDashboardUsers } from "../../redux/actions/dashboard-actions";
import { onLoadUserContent, onViewUserContent } from "../../redux/actions/content-actions";
import ContentContainer from "./ContentContainer";

export const MainContainer = () => {
  const dispatch = useDispatch();
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  const users = useSelector((state) => state.dashboard.users);

  useEffect(() => {
    dispatch(onLoadDashboardUsers());
    // eslint-disable-next-line
  }, []);

  const handleViewContent = (userId) => {
    // Toggle the user ID in the selectedUserIds array
    setSelectedUserIds((prevSelectedUserIds) =>
      prevSelectedUserIds.includes(userId)
        ? prevSelectedUserIds.filter((id) => id !== userId)
        : [...prevSelectedUserIds, userId]
    );

    // Load content for the user
    dispatch(onLoadUserContent(userId));
  };

  return (
    <Container>
      <h1>Users</h1>

      <UsersListContainer>
        {users.map((user) => (
          <React.Fragment key={`user-${user.id}`}>
            <UserContainer>
              <h3>{user.name}</h3>
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