// ExpenseForm.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #388e3c;
  }
`;

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: Math.floor(Math.random() * 1000) + 1,
      description,
      amount: +amount,
    };
    onAddExpense(expense);
    setDescription('');
    setAmount('');
    history.push('/');
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Description:
          <StyledInput
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Amount:
          <StyledInput
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledButton>Add Expense</StyledButton>
      </StyledForm>
    </div>
  );
}

export default ExpenseForm;
