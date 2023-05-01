import React from 'react';
import useMediaScreen from 'services/hooks/useMediaScreen';
import { ContentContainer } from '../../common/components/contentContainer';
import { Header } from 'modules/common/components/header';
import { TodoForm } from 'modules/common/components/todoForm';

const AddOrUpdateTodoPage = () => {
  const isMobileScreen = useMediaScreen('mobile');

  return (
    <>
      {isMobileScreen && <Header />}
      <ContentContainer>
        <TodoForm />
      </ContentContainer>
    </>
  );
};

export default AddOrUpdateTodoPage;
