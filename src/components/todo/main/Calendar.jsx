import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import * as S from '../../../styles/todo/main/Calendar.style';
import { useUserStore } from '../../../store/userStore';

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const nickname = useUserStore((state) => state.nickname);
  const profileImage = useUserStore((state) => state.profileImage);

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

      <S.TodoStatusBar>
        <div className="emoji-counter">
          <div>
            <span>✅</span>
            <span className="count">0</span>
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
        prev2Label={null}
        next2Label={null}
        prevLabel="<"
        nextLabel=">"
      />
    </S.CalendarContainer>
  );
};

export default CustomCalendar;
