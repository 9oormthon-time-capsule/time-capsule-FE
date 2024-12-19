import { useState } from 'react';
import styled from 'styled-components';

import LetterMenuOverlay from './LetterMenuOverlay';

const LetterCreateButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLetterCreatebutton = () => {
    setIsClicked(true);
  };

  return (
    <>
      {isClicked && <LetterMenuOverlay />}
      <Wrapper>
        <ButtonFrame onClick={handleLetterCreatebutton}>
          <img src="/main/Plus.svg" width={35} height={35} />
        </ButtonFrame>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 50px;
  z-index: 100;
`;

const ButtonFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  border-radius: 100%;
  background-color: lightgray;

  cursor: pointer;
`;

export default LetterCreateButton;
