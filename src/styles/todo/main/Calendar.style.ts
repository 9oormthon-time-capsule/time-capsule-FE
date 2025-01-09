import Calendar from 'react-calendar';
import styled from 'styled-components';

export const CalendarContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px;
  padding-left: 20px;

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

export const StyledCalendar = styled(Calendar)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 660px;
  border: none;
  font-size: 15px;

  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-size: 1em;
    padding: 10px 0;
    font-weight: bold;

    abbr {
      text-decoration: none;
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(7) {
      color: #6fa8ff;
    }

    .react-calendar__month-view__weekdays__weekday:nth-child(1) {
      color: #ff6f6f;
    }
  }

  .react-calendar__month-view__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
	width: 600px;
  }

  .react-calendar__month-view__days :disabled{
    color: transparent;
    background: none !important;
    pointer-events: none;
    cursor: default;
    position: relative;

    &::before {
      display: none;
    }
  }

  .react-calendar__tile {
    text-align: center;
    font-size: 1em;
    border: 1px solid transparent;
    padding-top: 30px;
    background: none;
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 7px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 20px;
      background-color: lightgray;
      border-radius: 5px;
    }

    &.react-calendar__tile--active abbr {
      background-color: black;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border: none;
      margin: auto;
      pointer-events: none;
    }
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 30px;
    margin-bottom: 20px;

    .react-calendar__navigation__label {
      display: flex;
      align-items: center;
      font-size: 1.5em;
      font-weight: 600;
    }

    .react-calendar__navigation__arrow {
      background: none;
      border: none;
      font-size: 1.5em;
      cursor: pointer;
      color: black;
      padding-left: 20px;

      &:hover {
        color: gray;
      }
    }

    .react-calendar__navigation__prev-button {
      order: 2;
    }

    .react-calendar__navigation__next-button {
      order: 3;
    }
  }
`;

export const TodoStatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;

  span {
    margin-left: 15px;
  }
`;