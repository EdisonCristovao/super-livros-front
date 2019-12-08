import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ListItem from './pages/ListItem';
// import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:id" exact component={ListItem} />
    </Switch>
  );
}
