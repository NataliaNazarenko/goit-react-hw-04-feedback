import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: flex;
  padding: 8px 12px;
  background-color: #0ca021ad;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.25;
  font-weight: 600;
  justify-content: center;
  width: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border: 1px solid #0ca021ad;

  :hover {
    background-color: #046a31ad;
  }
`;
