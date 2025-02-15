import styled from 'styled-components';

export const CapsuleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  gap: 1.5rem;
  padding-top: 5rem;
`;

export const CapsuleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CapsuleLabelBox = styled.div`
  padding: 0.5rem 1rem;

  border: none;
  border-radius: 0.825rem;

  font-size: 1.1em;
  font-weight: 600;
  background-color: #eee;
`;

export const CapsuleLabel = styled.span`
  margin-top: 10px;
  font-weight: bold;
`;

export const CapsuleImg = styled.img`
  width: 8rem;
  height: 8rem;

  border-radius: 50%;
  object-fit: cover;
`;
