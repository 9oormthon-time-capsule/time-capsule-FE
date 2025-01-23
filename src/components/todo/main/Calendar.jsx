import React, { useState, useEffect } from "react"; 
import * as S from "../../../styles/todo/main/Calendar.style"; 
import { useUserStore } from "../../../store/userStore"; 
import dayjs from "dayjs"; 
// 서버에서 투두 데이터를 가져오는 API 함수
import { addTodo, updateTodo } from "../../../api/todo"; 
import { fetchTodoData } from '../../../api/todo';

// 부모 컴포넌트에서 날짜 변경 함수를 받음
const CustomCalendar = ({ onDateChange, onCompletedCountChange, categories }) => { 
  // 현재 날짜를 저장
  const [currentDate, setCurrentDate] = useState(new Date()); 
  // 현재 달력을 기준으로 활성화된 월
  const [activeStartDate, setActiveStartDate] = useState(new Date()); 
  // 서버에서 가져온 전체 투두 리스트를 저장
  const [todos, setTodos] = useState([]); 
  // 날짜별 완료된 투두 수를 저장
  const [checkedCountByDate, setCheckedCountByDate] = useState({}); 
  // 사용자가 선택한 날짜
  const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD")); 
  // 선택된 날짜의 완료된 투두 수
  const [completedCount, setCompletedCount] = useState(0); 
  // 사용자 닉네임 가져오기
  const nickname = useUserStore((state) => state.nickname); 
  // 사용자 프로필 이미지 가져오기
  const profileImage = useUserStore((state) => state.profileImage); 
  
  // 'day', 'month', 'year', 'decade' 상태 관리
  const [view, setView] = useState("day");

  // 서버에서 투두 데이터를 가져오는 함수
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 데이터 가져오기
        const { todos } = await fetchTodoData(); 
        // 가져온 데이터를 상태에 저장
        setTodos(todos);
      
      } catch (error) {
        console.error("Error fetching todos:", error); 
      }
    };
    fetchData(); // 컴포넌트 마운트 시 실행
  }, []);

  // 날짜별 완료된 투두 수 계산
  useEffect(() => {
    const calculateCheckedCounts = () => {
      const counts = {};
  
      todos
        .filter((todo) => todo.isCompleted && !todo.isDeleted) // 완료 및 미삭제 조건
        .forEach((todo) => {
          const date = dayjs(todo.createdAt).format("YYYY-MM-DD");
          counts[date] = (counts[date] || 0) + 1;
        });
  
      setCheckedCountByDate(counts);
    };
  
    calculateCheckedCounts();
  }, [todos]);

  // 선택된 날짜의 완료된 투두 수 업데이트
  useEffect(() => {
    // 선택된 날짜의 완료된 투두 수
    const count = checkedCountByDate[selectedDate] || 0; 
    setCompletedCount(count); // 상태로 저장
    onCompletedCountChange(count);  // 부모 컴포넌트로 완료된 개수를 전달

  }, [selectedDate, checkedCountByDate]);

  // 날짜 클릭 시 처리
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleViewChange = () => {
    setView((prevView) => {
      if (prevView === "month") {
        return "year";
      } else if (prevView === "year") {
        return "decade";
      } else if (prevView === "decade") {
        return "day";
      } else {
        return "month";
      }
    });
  }; 

  // 삭제 처리 함수
  const handleDeleteTodo = async (todoId) => {
    try {
      await deleteTodo(todoId); // 서버 요청
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId)); // 상태 갱신 후
  
      // 상태 갱신 이후 카운트를 다시 계산
      updateCheckedCount();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };  

  useEffect(() => {
    updateCheckedCount(); // todos 상태 변경 시 실행
  }, [todos]);

  const updateCheckedCount = () => {
    const counts = {};

    // 삭제된 항목 제외, 카테고리 조건 추가
    const filteredTodos = todos.filter(todo => 
      todo.isCompleted && !todo.isDeleted && categories.includes(todo.categoryId)
    );

    todos.forEach((todo) => {
      if (todo.isCompleted && !todo.isDeleted) {
        const date = dayjs(todo.createdAt).format("YYYY-MM-DD");
        counts[date] = (counts[date] || 0) + 1;
      }
    });
    
    setCheckedCountByDate(counts);
  };

  // 비활성화된 타일 설정
  const tileDisabled = ({ date, view }) => {
    if (view === "month") { // 월별 보기에서만 적용
      const currentMonth = dayjs(activeStartDate).month(); // 현재 활성화된 월
      const tileMonth = dayjs(date).month(); // 타일의 월
      return currentMonth !== tileMonth; // 월이 다르면 비활성화
    }
    return false;
  };

  // 타일에 표시할 내용
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = dayjs(date).format("YYYY-MM-DD"); // 타일 날짜를 형식화
      const count = checkedCountByDate[formattedDate] || 0; // 해당 날짜의 완료된 투두 수
      
      // 완료된 투두가 있으면 표시
      if (count > 0) { 
        return <S.TileContent>{count}</S.TileContent>
      }
    }
    return null; // 완료된 투두가 없으면 표시하지 않음
  };

  const getNavigationLabel = () => {
    if (view === "day") {
      return `${dayjs(activeStartDate).format("YYYY년 M월")}`;
    } else if (view === "month") {
      return `${dayjs(activeStartDate).format("YYYY년 MM월")} (월별 보기)`;
    } else if (view === "year") {
      return `${dayjs(new Date(2021, 0, 1)).format("YYYY년")} (1년 단위 보기)`;
    } else if (view === "decade") {
      const startDecade = Math.floor((activeStartDate.getFullYear() -1) / 10) * 10 + 1;
      return `${startDecade}년 - ${startDecade + 9}년 (10년 단위 보기)`;
    }
  };

  return (
    <S.CalendarContainer>
      <S.ProfileHeader>
        <div className="profile">
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="profile"
          />
          <span>{nickname}</span>
        </div>
      </S.ProfileHeader>

      <S.StyledCalendar
        onChange={handleDateChange}
        value={new Date(selectedDate)} // 선택된 날짜를 캘린더에 표시
        calendarType="gregory" // 그레고리력 사용
        formatShortWeekday={(locale, date) =>
          ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]
        } // 요일 포맷
        formatDay={(locale, date) => date.getDate()} // 일 포맷
        prev2Label={null} // 두 단계 이전 버튼 숨김
        next2Label={null} // 두 단계 다음 버튼 숨김
        prevLabel="<" 
        nextLabel=">"
        tileDisabled={tileDisabled} // 비활성화 타일
        tileContent={tileContent} // 타일 내용
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        } // 활성화된 월 변경 시 호출
        navigationLabel={() => (
          <S.TodoStatusBar 
            onClick={handleViewChange} style={{ cursor: "pointer" }}
            title="한 번 클릭하면 월별 보기 또 클릭하면 1년 단위 보기 더 클릭하면 10년 단위 보기로 전환됩니다."
          >
              {getNavigationLabel()}
            <span>
              ☑️ {completedCount}
            </span>
          </S.TodoStatusBar>
        )}
      />
   </S.CalendarContainer>
  )
};

export default CustomCalendar;