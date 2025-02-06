import { useState, useEffect } from 'react';
import * as S from '../../../styles/todo/main/Calendar.style';
import { useUserStore } from '../../../store/userStore';
import dayjs from 'dayjs';
import { fetchTodoData } from '../../../api/todo';
import useTodo from '../../../hooks/useTodo';

const CustomCalendar = ({ onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const nickname = useUserStore((state) => state.nickname);
  const profileImage = useUserStore((state) => state.profileImage);
  const [completedCount, setCompletedCount] = useState(0);
  const today = new Date();

  const { todoQuery } = useTodo();
  const todos = todoQuery.data?.todos ?? [];

  const completedTodosForMonth = (month) => {
    return todos.filter((todo) => {
      const todoDate = new Date(todo.createdAt);
      return todoDate.getMonth() === month && todo.isCompleted;
    }).length;
  };

  const todosCountForDate = (date) => {
    return todos.filter(
      (todo) =>
        new Date(todo.createdAt).toDateString() ===
        new Date(date).toDateString(),
    ).length;
  };

  const todosCompletedCountForDate = (date) => {
    return todos.filter(
      (todo) =>
        new Date(todo.createdAt).toDateString() ===
          new Date(date).toDateString() && todo.isCompleted,
    ).length;
  };

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      const currentMonth = dayjs(activeStartDate).month();
      const tileMonth = dayjs(date).month();
      return currentMonth !== tileMonth;
    }
    return false;
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const todosForDate = todosCountForDate(date);
      const completedTodosForDate = todosCompletedCountForDate(date);

      if (todosForDate > 0) {
        return (
          <div
            style={{
              position: 'absolute',
              top: '9px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            {todosForDate - completedTodosForDate === 0
              ? '✔️'
              : todosForDate - completedTodosForDate}
          </div>
        );
      }
    }
    return null;
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = date.toDateString() === currentDate.toDateString();

      if (day === 0) return 'sunday';
      if (day === 6) return 'saturday';
      if (isSelected) return '';
      if (isToday) return 'today';
    }
    return '';
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate);
    setCurrentDate(
      new Date(activeStartDate.getFullYear(), activeStartDate.getMonth(), 1),
    );
  };

  const handleDateChange = (date) => {
    setCurrentDate(date);
  };

  useEffect(() => {
    if (currentDate) {
      onDateChange(currentDate);
    }
  }, [currentDate]);

  return (
    <S.CalendarContainer>
      <S.ProfileHeader>
        <div className="profile">
          <img
            src={profileImage || 'https://via.placeholder.com/150'}
            alt="profile"
          />
          <span>{nickname}</span>
        </div>
      </S.ProfileHeader>

      <S.StyledCalendar
        onChange={handleDateChange}
        value={currentDate}
        calendarType="gregory"
        formatShortWeekday={(locale, date) =>
          ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
        }
        formatDay={(locale, date) => date.getDate()}
        prev2Label={null}
        next2Label={null}
        prevLabel="<"
        nextLabel=">"
        tileDisabled={tileDisabled}
        tileContent={tileContent}
        tileClassName={tileClassName}
        onActiveStartDateChange={handleActiveStartDateChange}
        showNeighboringMonth={false}
        minDetail="month"
        navigationLabel={() => (
          <S.TodoStatusBar>
            {dayjs(activeStartDate).format('YYYY년 M월')}
            <span>
              ☑️ {completedTodosForMonth(dayjs(activeStartDate).month())}
            </span>
          </S.TodoStatusBar>
        )}
      />
    </S.CalendarContainer>
  );
};

export default CustomCalendar;
