import styled from 'styled-components';

export const FormInput = styled.input`
  width: 300px;
  height: 30px;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 18px;
`;

export const SubmitBtn = styled.button`
  width: 100px;
  min-height: 30px;
  font-size: 18px;
  border-radius: 5px;

  :hover,
  :focus {
    color: white;
    background-color: #597ffd;
  }
`;

export const MovieItem = styled.li`
  font-size: 18px;
  text-decoration: none;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
