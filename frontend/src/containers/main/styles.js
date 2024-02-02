import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const UsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: navy;
  }
`;

export const UserContainer = styled.div`
  button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
`;

export const ContentContainerWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ContentItemWrapper = styled.li`
  list-style-type: none;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 1px;
  padding: 10px;


  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 3px;
  }

  p {
    margin: 2;
    align-self: flex-start;
    background-color: navy;
    border: 2px solid white;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }

  div {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    border: 1px solid red;
    background-color: white;
    color: red;
    border-radius: 5px;
  }

  button.approve {
    border: 1px solid green;
    background-color: white;
    color: green;
    border-radius: 5px;
  }

  button.approve-faded {
    border: 1px solid rgba(0, 128, 0, 0.3);
    background-color: white;
    color: rgba(0, 128, 0, 0.3);
    border-radius: 5px;
  }
`;