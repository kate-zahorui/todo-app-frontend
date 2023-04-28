import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddTodoPage, HomePageContainer, TodoDetailsPage } from '../pages';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route element={<HomePageContainer />} path={APP_KEYS.ROUTER_KEYS.HOME} />
      <Route element={<AddTodoPage />} path={APP_KEYS.ROUTER_KEYS.ADD_TODO} />
      <Route element={<TodoDetailsPage />} path={APP_KEYS.ROUTER_KEYS.TODO_DETAILS} />
    </Routes>
  </Router>
);
