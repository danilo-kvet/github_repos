import styled from "styled-components";

export const RepoCardContainer = styled.div`
  width: 90vw;
  color: #000;
  height: 200px;
  max-width: 450px;
  border-radius: 16px;
  margin: 12px auto;
  cursor: pointer;
  background-color: #dee1f5;
  -webkit-box-shadow: 5px 8px 15px 4px rgba(0, 0, 0, 0.52);
  box-shadow: 5px 8px 15px 4px rgba(0, 0, 0, 0.52);
  transition: filter 100ms;
  transition: all ease-in-out 100ms;
  font-size: 0.75rem;

  h5 {
    flex-grow: 1;
  }

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.01);
  }
`;

export const RepoCardHeader = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 0.75rem;

  h3 {
    text-align: left;
    width: 40%;
    overflow: hidden;
  }
`;

export const StarDisplayContainer = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid #000;
  width: 70px;
  height: 30px;
  align-items: center;

  h5 {
    margin: 0;
    height: 100%;
    line-height: 30px;
    border-left: 1px solid #000;
  }
`;
