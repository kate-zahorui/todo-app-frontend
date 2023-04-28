import React from 'react';
import { ContentContainer } from '../../common/components/contentContainer';
import useMediaScreen from '../../../services/hooks/useMediaScreen';
import { Header } from 'modules/common/components/header';

const TodoDetails = () => {
  const isMobileScreen = useMediaScreen('mobile');

  return (
    <>
      {isMobileScreen && <Header />}
      <ContentContainer>
        <p>Todo Details</p>
      </ContentContainer>
    </>
  );
};

export default TodoDetails;
