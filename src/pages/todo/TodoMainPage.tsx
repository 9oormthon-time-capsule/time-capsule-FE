import CustomCalendar from '../../components/todo/main/Calendar';
import AddTodo from '../../components/todo/main/AddTodo';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/todo/TodoMainPage.style';
import Header from '../../components/common/Header';
import { useState } from 'react';
import dayjs from 'dayjs';

const TodoMainPage = () => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format('YYYY-MM-DD'),
  );

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const formattedDate = dayjs(selectedDate)?.format('YYYY-MM-DD');

  return (
    <MainLayout>
      <Header />
      <S.Content>
        <CustomCalendar onDateChange={handleDateChange} />
        <AddTodo selectedDate={formattedDate} />
      </S.Content>
    </MainLayout>
  );
};

export default TodoMainPage;
