import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import * as S from '../../../styles/todo/main/Calendar.style';

const CustomCalendar = ({
  todos,
  setTodos,
  selectedDate,
  setSelectedDate,
  handleCheckTodo,
  completedCountByDate,
}) => {
  const [date, setDate] = useState(new Date());
  const [checkedDates, setCheckedDates] = useState([]);
  const [clickedDate, setClickedDate] = useState(null);

  // 날짜를 'YYYY-MM-DD' 형식으로 변환하는 함수
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const updatedCheckedDates = todos
      .filter((todo) => todo.checked)
      .map((todo) => todo.date);

    setCheckedDates(updatedCheckedDates); // 완료된 날짜들을 저장
  }, [todos]);

  // 날짜 클릭 시 처리하는 함수
  const handleCheckTodoClick = (day) => {
    // 클릭한 날짜를 'YYYY-MM-DD'로 포맷팅
    const clickedFormattedDate = formatDate(day);

    // 날짜 상태 업데이트
    setClickedDate(clickedFormattedDate);
    setSelectedDate(new Date(clickedFormattedDate)); // 선택된 날짜를 상태로 설정
  };

  // 할 일 완료 처리 함수
  const handleTodoComplete = (date) => {
    // 날짜를 'YYYY-MM-DD'로 포맷팅
    const formattedDate = formatDate(date);

    // 해당 날짜의 할 일 체크
    setTodos(todos.map((todo) =>
      todo.date === formattedDate ? { ...todo, checked: true } : todo
    ));
  };

  // 특정 날짜의 완료된 할 일 개수 반환
  const getCompletedCountForDate = (date) => {
    const formattedDate = formatDate(date);
    return todos.filter((todo) => todo.date === formattedDate && todo.checked).length;
  };

  return (
    <S.CalendarContainer>
      <S.ProfileHeader>
        <div className="profile">
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAxODA2MTVfMyAg/MDAxNTI5MDQ2NzQ5ODM4.j5CptgMQTgciYH_A_H1qUwS4i--k1M-Y94yM691jXvwg.ZW9GQH6hMzfLcsPj66R69NXH20ebrvbDm5nSdHJKCfYg.JPEG.lhy7341/FB_IMG_1529024503427.jpg?type=w800"
            alt="profile"
          />
          <span>me</span>
        </div>
      </S.ProfileHeader>

      <S.TodoStatusBar>
        <div className="emoji-counter">
          <div>
            <span>✅</span>
            <span className="count">
              {
                todos.filter(
                  (todo) => todo.date === selectedDate.toISOString().split('T')[0] && todo.checked
                ).length
              }
            </span>
          </div>
        </div>
      </S.TodoStatusBar>

      <S.StyledCalendar
        onChange={setDate}
        value={date}
        calendarType="gregory"
        formatShortWeekday={(locale, date) =>
          ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
        }
        formatDay={(locale, date) => date.getDate()}
        tileContent={({ date: tileDate }) => {
          const completedCount = getCompletedCountForDate(tileDate);

          return (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid #333',
                  borderRadius: '3px',
                  backgroundColor: checkedDates.includes(formatDate(tileDate)) || clickedDate === formatDate(tileDate) ? '#4caf50' : 'transparent', // 완료된 날짜나 클릭된 날짜에 배경색
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s ease',
                }}
              >
                {completedCount > 0 && (
                  <span style={{ color: 'white', fontSize: '16px' }}>
                    {completedCount}
                  </span>
                )}
              </div>
            </div>
          );
        }}
        prev2Label={null}
        next2Label={null}
        prevLabel="<"
        nextLabel=">"
        onClickDay={handleCheckTodoClick} // 날짜 클릭 시 처리
        tileClassName={({ date: tileDate }) => {
          const formattedDate = formatDate(tileDate);
          if (formattedDate === clickedDate) {
            return 'clicked-date'; // 클릭된 날짜에 클래스 적용 (선택적 추가)
          }
          return '';
        }}
      />
    </S.CalendarContainer>
  );
};

export default CustomCalendar;

