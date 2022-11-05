import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
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
