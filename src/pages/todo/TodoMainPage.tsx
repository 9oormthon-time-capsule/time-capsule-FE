import CustomCalendar from '../../components/todo/main/Calendar'
import AddTodo from '../../components/todo/main/AddTodo'
import styled from 'styled-components'
import TodoHeader from '../../components/todo/main/TodoHeader'
import MainLayout from '../../layout/MainLayout'

const TodoMainPage = () => {
  return (
    <MainLayout>
      <Container>
        <TodoHeader />
        <Content>
          <CustomCalendar />
          <AddTodo />
        </Content>
      </Container>
    </MainLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 50px;
  flex-grow: 1;
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 100px);
  box-sizing: border-box;
  margin-top: 50px;
`;

export default TodoMainPage