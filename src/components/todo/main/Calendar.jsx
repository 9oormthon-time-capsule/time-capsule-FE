import { useState } from 'react';
import * as S from '../../../styles/todo/main/Calendar.style';
import { useUserStore } from '../../../store/userStore';
import dayjs from 'dayjs';

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const nickname = useUserStore((state) => state.nickname);
  const profileImage = useUserStore((state) => state.profileImage);

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      const currentMonth = dayjs(activeStartDate).month();
      const tileMonth = dayjs(date).month();
      return currentMonth !== tileMonth;
    }
    return false;
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate);
  };

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
        onChange={setCurrentDate}
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
        onActiveStartDateChange={handleActiveStartDateChange}
        navigationLabel={() => (
          <S.TodoStatusBar>
            {dayjs(activeStartDate).format('YYYY년 M월')}
            <span>☑️ 0</span>
          </S.TodoStatusBar>
        )}
      />
    </S.CalendarContainer>
  );
};

export default CustomCalendar;
