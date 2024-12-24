import Calendar from 'react-calendar';
import styled from 'styled-components';

export const CalendarContainer = styled.div`
	font-family: Arial, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: black;
`;

export const ProfileHeader = styled.div`
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

export const StyledCalendar = styled(Calendar)`
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

export const TodoStatusBar = styled.div`
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
