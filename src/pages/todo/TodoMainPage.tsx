import CustomCalendar from '../../components/todo/main/Calendar';
import AddTodo from '../../components/todo/main/AddTodo';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/todo/TodoMainPage.style';
import Header from '../../components/common/Header';
import { useState } from 'react';
import dayjs from 'dayjs';
import useTodo from '../../hooks/useTodo';
import useCategory from '../../hooks/useCategory';
import Loading from '../../components/common/Loading';

const TodoMainPage = () => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format('YYYY-MM-DD'),
  );

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const formattedDate = dayjs(selectedDate)?.format('YYYY-MM-DD');

  const { todoQuery } = useTodo();
  const todos = todoQuery.data?.todos ?? [];

  const { categoryQuery } = useCategory();
  const categories = categoryQuery.data ?? [];

  if (todoQuery.isLoading || categoryQuery.isLoading) return <Loading />;

  return (
    <MainLayout>
      <Header />
      <S.Content>
        <CustomCalendar onDateChange={handleDateChange} todos={todos} />
        <AddTodo
          selectedDate={formattedDate}
          todos={todos}
          categories={categories}
        />
      </S.Content>
    </MainLayout>
  );
};

export default TodoMainPage;
