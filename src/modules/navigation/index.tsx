import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AddOrUpdateTodoPage, HomePageContainer } from '../pages';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => (
  <Router basename="/todo-app-frontend">
    <Routes>
      <Route
        path={APP_KEYS.ROUTER_KEYS.ROOT}
        element={<Navigate to={APP_KEYS.ROUTER_KEYS.HOME} />}
      />
      <Route path={APP_KEYS.ROUTER_KEYS.HOME} element={<HomePageContainer />} />
      <Route path={APP_KEYS.ROUTER_KEYS.ADD_TODO} element={<AddOrUpdateTodoPage />} />
      <Route path={APP_KEYS.ROUTER_KEYS.TODO_DETAILS} element={<AddOrUpdateTodoPage />} />
      <Route path="*" element={<Navigate to={APP_KEYS.ROUTER_KEYS.HOME} />} />
    </Routes>
  </Router>
);
