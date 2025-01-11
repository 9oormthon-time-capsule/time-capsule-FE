import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  height: auto;
`;

export const ContentTextArea = styled.textarea`
  width: 60%;
  height: 50vh;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  resize: none;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 50px;
`;
