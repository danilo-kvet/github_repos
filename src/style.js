import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledForm = styled.form`
  padding: 8px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  max-width: 300px;

  button {
    cursor: pointer;
    margin: 8px 0;
    background-color: #5f6069;
    color: #fff;
    border: 1px solid #000;
    border-radius: 4px;
    outline: none;
    height: 28px;
    -webkit-box-shadow: 5px 4px 15px -2px rgba(0, 0, 0, 0.52);
    box-shadow: 5px 4px 15px -2px rgba(0, 0, 0, 0.52);
  }

  input {
    height: 20px;
    border-radius: 4px;
    background-color: #dee1f5;
    border: 1px solid #a7aee7;
    outline: none;
    -webkit-box-shadow: 5px 4px 15px -2px rgba(0, 0, 0, 0.52);
    box-shadow: 5px 4px 15px -2px rgba(0, 0, 0, 0.52);
  }
`;

export const ResultContainer = styled.div`
  text-align: center;
`;

export const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`;
