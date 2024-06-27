import styled from "styled-components";

export const TimeProgressBtn = styled.button`
  background-color: skyblue;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: deepskyblue;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export const ChartContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
  width:100%;
  background-image: linear-gradient(to bottom, skyblue, #ffffff);
  background-size: cover;
  box-sizing:border-box;
  margin:0;
  padding:18px;
`;
