import React, { useState } from "react";
// 리액트 캘린더 패키지
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

// 달력 스타일링
const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 600px;
  background: white;
  border: none;
  font-family: Arial, sans-serif;
  line-height: 1.5em;

  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    border-radius: 6px;
    padding: 10px 0;
    font-size: 16px;
    &:hover {
      background-color: #e0f7fa;
    }
  }

  .react-calendar__tile--now {
    background: #b3e5fc;
    color: black;
    border-radius: 6px;
  }

  .react-calendar__tile--active {
    background: #0288d1;
    color: white;
    border-radius: 6px;
  }
`;

// 이모지 아이템 스타일링
const ImojiItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: #333;
  font-weight: bold;

  span {
    background-color: #e0e0e0;
    padding: 6px 12px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

// 이모지들을 묶는 스타일
const ImojiWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px; /* 달력과 이모지 사이 간격 */
`;

// 전체 레이아웃 스타일
const Container = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  margin-top: 100px;
`;

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <StyledCalendar
        onChange={setDate} // 날짜 선택 시 업데이트
        value={date}
        calendarType="gregory" // 월요일 시작으로 설정
      />

      <ImojiWrapper>
        <ImojiItem>
          ✅<span>0</span>
        </ImojiItem>
        <ImojiItem>
          🙂<span>0</span>
        </ImojiItem>
        <ImojiItem>
          ❤️<span>0</span>
        </ImojiItem>
      </ImojiWrapper>
    </div>
  );
};

export default CustomCalendar;
