import { useState, useEffect } from 'react';
import * as S from '../../../styles/todo/main/Calendar.style';
import { useUserStore } from '../../../store/userStore';
import dayjs from 'dayjs';
import { fetchTodoData } from '../../../api/todo';

const CustomCalendar = ({ onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const nickname = useUserStore((state) => state.nickname);
  const profileImage = useUserStore((state) => state.profileImage);
  const [completedCount, setCompletedCount] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { todos, completedCount } = await fetchTodoData();
      setCompletedCount(completedCount);
      setTodos(todos);
    };

    fetchData();

    const handleTodoUpdated = (event) => {
      fetchData();
    };

    window.addEventListener('todoUpdated', handleTodoUpdated);

    return () => {
      window.removeEventListener('todoUpdated', handleTodoUpdated);
    };
  }, []);

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
      const todosForDate = todos.filter(
        (todo) =>
          dayjs(todo.createdAt).format('YYYY-MM-DD') ===
          dayjs(date).format('YYYY-MM-DD'),
      ).length;

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
            {todosForDate}
          </div>
        );
      }
    }
    return null;
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate);
  };

  const handleDateChange = (date) => {
    setCurrentDate(date);
    onDateChange(date);
  };

  console.log(completedCount);

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
        onActiveStartDateChange={handleActiveStartDateChange}
        navigationLabel={() => (
          <S.TodoStatusBar>
            {dayjs(activeStartDate).format('YYYY년 M월')}
            <span>☑️ {completedCount}</span>
          </S.TodoStatusBar>
        )}
      />
    </S.CalendarContainer>
  );
};

export default CustomCalendar;
