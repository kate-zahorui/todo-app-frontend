import React from 'react';
import { useQuery } from 'react-query';
import todoService from '../../../services/api/todo.service';
import { ContentContainer } from '../../common/components/contentContainer';
import { Header } from '../../common/components/header';
import { APP_KEYS } from '../../common/consts';

const HomePageContainer = () => {
  const { isLoading, isError, error } = useQuery(
    APP_KEYS.QUERY_KEYS.TODOS,
    todoService.getTodos.bind(todoService)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  return (
    <>
      <Header />
      <ContentContainer>
        <p>Home</p>
      </ContentContainer>
    </>
  );
};

export default HomePageContainer;
