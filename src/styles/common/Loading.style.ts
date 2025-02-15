import styled from 'styled-components';

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const LoadingImage = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`;
