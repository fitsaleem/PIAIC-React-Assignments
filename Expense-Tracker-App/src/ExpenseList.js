// ExpenseList.js

import React, { useState } from 'react';
import styled from 'styled-components';
import ExpenseItem from './ExpenseItem';

const StyledList = styled.ul`
  list-style: none;
`;

function ExpenseList() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Rent', amount: 1000 },
    { id: 2, description: 'Groceries', amount: 200 },
    { id: 3, description: 'Gas', amount: 50 },
  ]);

  return (
    <div>
      <h2>Expenses</h2>
      <StyledList>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </StyledList>
    </div>
  );
}

export default ExpenseList;
