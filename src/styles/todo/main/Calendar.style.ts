import Calendar from 'react-calendar';
import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TileContent = styled.div`
  position: 'absolute';
  top: '9px';
  left: '50%';
  transform: 'translateX(-50%)';
  font-size: '12px';
  font-weight: 'bold';
  color: 'black';
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
  font-weight: bold;

  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-size: 17px;
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
    height: 340px;
  }

  .react-calendar__month-view__days :disabled {
    color: transparent;
    background: none !important;
    pointer-events: none;
    cursor: default;
    position: relative;

    &::before {
      display: none;
    }
  }

  .saturday {
    color: #6fa8ff !important;
  }

  .sunday {
    color: #ff6f6f !important;
  }

  .react-calendar__tile {
    text-align: center;
    font-size: 1.1em;
    border: 1px solid transparent;
    padding-top: 30px;
    background: none;
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    height: 4.25rem;

    &::before {
      content: '';
      position: absolute;
      top: 7px;
      left: 50%;
      transform: translateX(-50%);
      width: 22px;
      height: 22px;
      background-color: #d3d8db;
      border-radius: 5px;
    }

    &.react-calendar__tile--active abbr {
      background-color: black;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border: none;
      margin: auto;
      pointer-events: none;
    }

    &.react-calendar__tile.today abbr {
      background-color: #dadde2;
      color: black;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border: none;
      margin: auto;
      pointer-events: none;
    }

    &.react-calendar__tile--active.saturday abbr {
      color: #6fa8ff;
    }

    &.react-calendar__tile--active.sunday abbr {
      color: #ff6f6f;
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
      font-weight: bold;
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
  color: black;

  span {
    margin-left: 15px;
  }
`;

export const TodoCntForDate = styled.div`
  position: absolute;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: bold;
  color: black;
`;
