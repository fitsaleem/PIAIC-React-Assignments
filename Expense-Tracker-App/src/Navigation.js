// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const StyledLink = styled(Link)`
  background-color: #4caf50;
  border-radius: 5px;
  color: white;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  &:hover {
    background-color: #388e3c;
  }
`;

function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/add-expense">Add Expense</StyledLink>
    </Nav>
  );
}

export default Navigation;
