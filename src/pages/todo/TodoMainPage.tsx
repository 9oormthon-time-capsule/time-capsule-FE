// import CustomCalendar from '../../components/todo/main/Calendar';
// import AddTodo from '../../components/todo/main/AddTodo';
// import MainLayout from '../../layout/MainLayout';
// import * as S from '../../styles/todo/TodoMainPage.style';
// import Header from '../../components/common/Header';
// import { useState } from 'react';
// import dayjs from 'dayjs';

// const TodoMainPage = () => {
//   const [selectedDate, setSelectedDate] = useState(
//     dayjs().format('YYYY-MM-DD'),
//   );

//   const handleDateChange = (date: string) => {
//     setSelectedDate(date);
//   };

//   const formattedDate = dayjs(selectedDate)?.format('YYYY-MM-DD');

//   return (
//     <MainLayout>
//       <Header />
//       <S.Content>
//         <CustomCalendar onDateChange={handleDateChange} />
//         <AddTodo selectedDate={formattedDate} />
//       </S.Content>
//     </MainLayout>
//   );
// };

// export default TodoMainPage;

import CustomCalendar from '../../components/todo/main/Calendar';
import AddTodo from '../../components/todo/main/AddTodo';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/todo/TodoMainPage.style';
import Header from '../../components/common/Header';
import { useState } from 'react';
import dayjs from 'dayjs';

const TodoMainPage = () => {
  const [todos, setTodos] = useState([]);  // todos 상태를 상위 컴포넌트에서 관리
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [completedCount, setCompletedCount] = useState(0); 
  // 활성화된 카테고리 상태 관리
  // const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState([]);

  const handleDateChange = (date: string) => {
    setSelectedDate(date); 
  };

  const handleCompletedCountChange = (count: number) => {
    setCompletedCount(count);
  };

  const handleTodosChange = (updatedTodos: any) => {
    setTodos(updatedTodos); // todos 상태를 업데이트하는 함수
  };

  // 카테고리를 클릭했을 때 실행되는 함수
  // const handleCategoryClick = (id: string) => {
  //   // 활성화된 카테고리 토글
  //   setActiveCategory((prev) => (prev === id ? null : id));
  // };

  const formattedDate = dayjs(selectedDate)?.format('YYYY-MM-DD');

  return (
    <MainLayout>
      <Header />
      <S.Content>
        <CustomCalendar 
          todos={todos}  // todos를 CustomCalendar에 전달
          onDateChange={handleDateChange} 
          onCompletedCountChange={handleCompletedCountChange}
          // handleCategoryClick={handleCategoryClick}
          // activeCategory={activeCategory}
          categories={categories}
        />
        <AddTodo 
          selectedDate={formattedDate}
          todos={todos}  // todos를 AddTodo에 전달
          onTodosChange={handleTodosChange}  // todos 변경 시 상위 상태 업데이트
          onCompletedCountChange={handleCompletedCountChange} 
          // handleCategoryClick={handleCategoryClick}
          // activeCategory={activeCategory}
        />
      </S.Content>
    </MainLayout>
  );
};

export default TodoMainPage;
