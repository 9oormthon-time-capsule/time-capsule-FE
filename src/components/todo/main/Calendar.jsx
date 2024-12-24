import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import * as S from '../../../styles/todo/main/Calendar.style';

const CustomCalendar = () => {
	const [date, setDate] = useState(new Date());

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
