import styled from 'styled-components';

export const TodoContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
`;

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CategoryItem = styled.button<{ textColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #f2f2f2;
  border-radius: 5rem;
  width: fit-content;
  font-weight: bold;
  color: ${(props) => props.textColor};
`;

export const PlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  border-radius: 5rem;
  background-color: white;
  margin-left: 0.2rem;
`;

export const InputGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CheckBox = styled.input<{ textColor: string }>`
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: ${(props) => props.textColor};
  }
`;

export const TodoInput = styled.input<{ textColor: string }>`
  flex: 1;
  max-width: 100%;
  padding: 5px;
  margin-left: 10px;
  border: none;
  border-bottom: 2px solid ${(props) => props.textColor};
`;

export const AddButton = styled.button<{ textColor: string }>`
  padding: 0.3rem;
  margin-left: 0.5rem;
  background-color: ${(props) => props.textColor};
  color: black;
  border: none;
  border-radius: 5px;
`;
