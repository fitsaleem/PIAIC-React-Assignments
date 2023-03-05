// Header.js

import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  text-align: center;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Expense Tracker App</h1>
    </StyledHeader>
  );
}

export default Header;
