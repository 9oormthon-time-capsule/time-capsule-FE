import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: black;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;

  .profile {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    span {
      font-size: 1.4em;
      font-weight: bold;
    }
  }
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 660px;
  border: none;
  color: black;
  font-size: 20px;
  font-weight: bold;

  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-size: 1em;
    font-weight: bold;

    abbr {
      text-decoration: none;
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(7) {
      color: blue;
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(1) {
      color: red;
    }
  }

  .react-calendar__tile {
    text-align: center;
    border-radius: 50px;
    font-size: 1em;
    color: black;

    &:nth-child(7n) {
      color: blue;
    }

    &:nth-child(7n - 6) {
      color: red;
    }

    &.react-calendar__tile--active {
      background-color: black;
      color: white;
    }
  }
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 1.2em;

  .emoji-counter {
    display: flex;
    gap: 10px;

    div {
      display: flex;
      gap: 5px;

      span {
        font-weight: bold;
      }
    }
  }
`;

const CustomTileContent = ({ date, checkedDates, onCheck }) => {
  const formattedDate = date.toISOString().split("T")[0];
  const isChecked = checkedDates.includes(formattedDate);

  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onCheck(formattedDate)}
        style={{ 
          display: "none" 
        }}
      />
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "5px",
          border: "2px solid #333",
          backgroundColor: isChecked ? "#4caf50" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.2s ease",
        }}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="16px"
            height="16px"
          >
            <path d="M20.285 2.995l-12.285 12.285-5.285-5.285-1.414 1.414 6.699 6.7 13.7-13.7z" />
          </svg>
        )}
      </div>
    </label>
  );
};

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [checkedDates, setCheckedDates] = useState([]);

  const handleCheck = (formattedDate) => {
    setCheckedDates((prev) =>
      prev.includes(formattedDate)
        ? prev.filter((date) => date !== formattedDate)
        : [...prev, formattedDate]
    );
  };

  return (
    <Container>
      <Header>
        <div className="profile">
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAxODA2MTVfMyAg/MDAxNTI5MDQ2NzQ5ODM4.j5CptgMQTgciYH_A_H1qUwS4i--k1M-Y94yM691jXvwg.ZW9GQH6hMzfLcsPj66R69NXH20ebrvbDm5nSdHJKCfYg.JPEG.lhy7341/FB_IMG_1529024503427.jpg?type=w800"
            alt="profile"
          />
          <span>me</span>
        </div>
      </Header>

      <StatusBar>
        <div className="emoji-counter">
          <div>
            <span>✅</span>
            <span className="count">{checkedDates.length}</span>
          </div>
        </div>
      </StatusBar>

      <StyledCalendar
        onChange={setDate}
        value={date}
        calendarType="gregory"
        formatShortWeekday={(locale, date) =>
          ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]
        }
        formatDay={(locale, date) => date.getDate()}
        tileContent={({ date: tileDate }) => (
          <CustomTileContent
            date={tileDate}
            checkedDates={checkedDates}
            onCheck={handleCheck}
          />
        )}
        prev2Label={null}
        next2Label={null}
        prevLabel="<"
        nextLabel=">"
      />
    </Container>
  );
};

export default CustomCalendar;
