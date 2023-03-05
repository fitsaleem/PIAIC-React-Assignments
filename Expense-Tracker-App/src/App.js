// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

const Container = styled.div`
  margin-top: 2rem;
`;

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Container className="container">
        <Switch>
          <Route exact path="/" component={ExpenseList} />
          <Route exact path="/add-expense" component={ExpenseForm} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
