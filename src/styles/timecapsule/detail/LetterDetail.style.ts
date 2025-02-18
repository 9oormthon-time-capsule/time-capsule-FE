import styled from 'styled-components';

export const LetterDetailContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BackButton = styled.button`
  align-self: flex-start;
  font-size: 2rem;
  color: rgb(252, 229, 194);
  cursor: pointer;
  margin-top: 2rem;
  margin-left: 2rem;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 2rem;
  text-shadow:
    1px 1px 0 white,
    -1px 1px 0 white,
    1px -1px 0 white,
    -1px -1px 0 white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const LetterContent = styled.div`
  width: 90%;
  max-width: 800px;
  background-color: white;
  width: 90%;
  height: 60vh;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 1.25rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BodyText = styled.p`
  font-size: 1rem;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  max-width: 100%;
  overflow-wrap: break-word;
`;

export const DownloadButton = styled.button`
  padding: 15px 45px;
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;
