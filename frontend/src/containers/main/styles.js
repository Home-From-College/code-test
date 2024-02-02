import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const UsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserContainer = styled.div``;

export const ContentContainerWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ContentItemWrapper = styled.li`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }

  div {
    margin-top: 10px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  margin-top: 10px;

  button {
    margin: 0 5px;
    padding: 8px;
    cursor: pointer;
  }

  button.reject {
    background-color: red;
    color: white;
  }

  button.approve {
    background-color: green;
    color: white;
  }
`;