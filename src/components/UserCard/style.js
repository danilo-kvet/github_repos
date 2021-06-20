import styled from "styled-components";

export const UserCardContainer = styled.div`
  display: flex;
  color: #000;
  text-decoration: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 450px;
  border-radius: 16px;
  margin: 12px auto;
  cursor: pointer;
  background-color: #dee1f5;
  -webkit-box-shadow: 5px 8px 15px 4px rgba(0, 0, 0, 0.52);
  box-shadow: 5px 8px 15px 4px rgba(0, 0, 0, 0.52);
  transition: filter 100ms;
  transition: all ease-in-out 100ms;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.01);
  }
`;
