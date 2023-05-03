import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddOrUpdateTodoPage, HomePageContainer } from '../pages';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => (
  <Router basename="/todo-app-frontend">
    <Routes>
      <Route element={<HomePageContainer />} path={APP_KEYS.ROUTER_KEYS.HOME} />
      <Route element={<AddOrUpdateTodoPage />} path={APP_KEYS.ROUTER_KEYS.ADD_TODO} />
      <Route element={<AddOrUpdateTodoPage />} path={APP_KEYS.ROUTER_KEYS.TODO_DETAILS} />
    </Routes>
  </Router>
);
