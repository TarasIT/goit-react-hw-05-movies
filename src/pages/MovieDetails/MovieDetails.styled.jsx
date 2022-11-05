import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieBox = styled.main``;

export const Link = styled(NavLink)`
  display: block;
  width: 100px;
  padding: 8px;
  font-size: 20px;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  :hover,
  :focus {
    color: orangered;
  }
`;

export const Title = styled.h2`
  margin-bottom: 0;
`;
