import React from 'react';
import useMediaScreen from 'services/hooks/useMediaScreen';
import { ContentContainer } from '../../common/components/contentContainer';
import { Header } from 'modules/common/components/header';

const AddTodoPage = () => {
  const isMobileScreen = useMediaScreen('mobile');

  return (
    <>
      {isMobileScreen && <Header />}
      <ContentContainer>
        <p>Add Todo</p>
      </ContentContainer>
    </>
  );
};

export default AddTodoPage;
