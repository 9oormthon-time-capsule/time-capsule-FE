// import { useState, useEffect } from 'react';
// import * as S from '../../../styles/todo/main/Calendar.style';
// import { useUserStore } from '../../../store/userStore';
// import dayjs from 'dayjs';
// import { fetchTodoData } from '../../../api/todo';

// const CustomCalendar = ({ onDateChange }) => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [activeStartDate, setActiveStartDate] = useState(new Date());
//   const nickname = useUserStore((state) => state.nickname);
//   const profileImage = useUserStore((state) => state.profileImage);
//   const [completedCount, setCompletedCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { todos, completedCount } = await fetchTodoData();
//       setCompletedCount(completedCount);
//       setTodos(todos);
//     };
  
//     fetchData();
  
//     const handleTodoUpdated = (event) => {
//       fetchData();
//     };
  
//     window.addEventListener('todoUpdated', handleTodoUpdated);

//     return () => {
//       window.removeEventListener('todoUpdated', handleTodoUpdated);
//     };
//   }, []);
  

//   const tileDisabled = ({ date, view }) => {
//     if (view === 'month') {
//       const currentMonth = dayjs(activeStartDate).month();
//       const tileMonth = dayjs(date).month();
//       return currentMonth !== tileMonth;
//     }
//     return false;
//   };

//   const tileContent = ({ date, view }) => {
//     if (view === 'month') {
//       const todosForDate = todos.filter(
//         (todo) =>
//           dayjs(todo.createdAt).format('YYYY-MM-DD') ===
//           dayjs(date).format('YYYY-MM-DD')
//       ).length;
  
//       if (todosForDate > 0) {
//         return (
//           <div
//             style={{
//               position: 'absolute',
//               top: '9px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '12px',
//               fontWeight: 'bold',
//               color: 'black',
//             }}
//           >
//             {todosForDate}
//           </div>
//         );
//       }
//     }
//     return null;
//   };
  

//   const handleActiveStartDateChange = ({ activeStartDate }) => {
//     setActiveStartDate(activeStartDate);
//   };

//   const handleDateChange = (date) => {
//     setCurrentDate(date);
//     onDateChange(date);
//   };

//   console.log(completedCount)

//   return (
//     <S.CalendarContainer>
//       <S.ProfileHeader>
//         <div className="profile">
//           <img
//             src={profileImage || 'https://via.placeholder.com/150'}
//             alt="profile"
//           />
//           <span>{nickname}</span>
//         </div>
//       </S.ProfileHeader>

//       <S.StyledCalendar
//         onChange={handleDateChange}
//         value={currentDate}
//         calendarType="gregory"
//         formatShortWeekday={(locale, date) =>
//           ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
//         }
//         formatDay={(locale, date) => date.getDate()}
//         prev2Label={null}
//         next2Label={null}
//         prevLabel="<"
//         nextLabel=">"
//         tileDisabled={tileDisabled}
//         tileContent={tileContent}
//         onActiveStartDateChange={handleActiveStartDateChange}
//         navigationLabel={() => (
//           <S.TodoStatusBar>
//             {dayjs(activeStartDate).format('YYYY년 M월')}
//             <span>☑️ {completedCount}</span>
//           </S.TodoStatusBar>
//         )}
//       />
//     </S.CalendarContainer>
//   );
// };

// export default CustomCalendar;


// React에서 상태와 효과를 관리하는 훅을 가져옴
import { useState, useEffect } from "react"; 
// 스타일 컴포넌트 가져오기
import * as S from "../../../styles/todo/main/Calendar.style"; 
// 사용자 정보를 가져오는 상태 관리 훅
import { useUserStore } from "../../../store/userStore"; 
// 날짜를 쉽게 다룰 수 있는 라이브러리
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
  // 'month', 'year', 'decade' 상태 관리
  const [view, setView] = useState("month");

  // 서버에서 투두 데이터를 가져오는 함수
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 데이터 가져오기
        const { todos } = await fetchTodoData(); 
        // 가져온 데이터를 상태에 저장
        setTodos(todos); 
      } catch (error) {
        // 에러 발생 시 로그 출력
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
    // 날짜별 완료된 개수를 저장할 객체
  //   const counts = {}; 

  //   categories.forEach((category) => {
  //     const activeTodos = todos.filter(todo => todo.isCompleted && !todo.isDeleted && todo.categoryId === category.id);
  //     activeTodos.forEach((todo) => {
  //       const date = dayjs(todo.createdAt).format("YYYY-MM-DD");
  //       counts[date] = (counts[date] || 0) + 1;
  //     });
  //   });

  //   setCheckedCountByDate(counts);
  // }, [todos, categories]); // categories와 todos가 변경될 때마다 실행

  // 선택된 날짜의 완료된 투두 수 업데이트
  useEffect(() => {
    // 선택된 날짜의 완료된 투두 수
    const count = checkedCountByDate[selectedDate] || 0; 
    setCompletedCount(count); // 상태로 저장
    onCompletedCountChange(count);  // 부모 컴포넌트로 완료된 개수를 전달

    // console.log('Selected Date:', selectedDate);
  }, [selectedDate, checkedCountByDate]); // selectedDate 또는 checkedCountByDate가 변경될 때 실행

  // 날짜 클릭 시 처리
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // 날짜 범위가 바뀔 때 호출되는 핸들러 (보기 상태 변경
  const handleActiveStartDateChange = ({ activeStartDate }) => {
    // view 상태를 순차적으로 변경
    setView((prevView) => {
      if (prevView === "month") return "year"; // month -> year
      if (prevView === "year") return "decade"; // year -> decade
      return "month"; // decade -> month
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
    if (view === "month") { // 월별 보기에서만 적용
      const formattedDate = dayjs(date).format("YYYY-MM-DD"); // 타일 날짜를 형식화
      const count = checkedCountByDate[formattedDate] || 0; // 해당 날짜의 완료된 투두 수
      if (count > 0) { // 완료된 투두가 있으면 표시
        return (
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            {count} {/* 완료된 투두 수 */}
          </div>
        );
      }
    }
    return null; // 완료된 투두가 없으면 표시하지 않음
  };

  return (
    <S.CalendarContainer>
      {/* 사용자 프로필 정보 */}
      <S.ProfileHeader>
        <div className="profile">
          <img
            // 프로필 이미지 또는 기본 이미지
            src={profileImage || "https://via.placeholder.com/150"} 
            alt="profile" // 이미지 설명
          />
          <span>{nickname}</span> {/* 사용자 닉네임 */}
        </div>
      </S.ProfileHeader>

      {/* 캘린더 */}
      <S.StyledCalendar
        onChange={handleDateChange} // 날짜 클릭 시 호출
        value={new Date(selectedDate)} // 선택된 날짜를 캘린더에 표시
        calendarType="gregory" // 그레고리력 사용
        formatShortWeekday={(locale, date) =>
          ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]
        } // 요일 포맷
        formatDay={(locale, date) => date.getDate()} // 일 포맷
        prev2Label={null} // 두 단계 이전 버튼 숨김
        next2Label={null} // 두 단계 다음 버튼 숨김
        prevLabel="<" // 이전 버튼
        nextLabel=">" // 다음 버튼
        tileDisabled={tileDisabled} // 비활성화 타일
        tileContent={tileContent} // 타일 내용
        // 활성화된 월 변경 시 호출
        onActiveStartDateChange={handleActiveStartDateChange}

        navigationLabel={() => (
          <S.TodoStatusBar>
            <span title="한 번 클릭하면 연도별 보기, 두 번 클릭하면 10년 단위 보기로 전환됩니다.">
              {/* 현재 달력 상태 표시 */}
              {dayjs(activeStartDate).format("YYYY년 M월")} {/* 현재 월 */}
              {view === "month" && <span>(월별 보기)</span>}
              {view === "year" && <span>(연도별 보기)</span>}
              {view === "decade" && <span>(10년 단위 보기)</span>}
            </span>
            {/* 선택된 날짜 완료된 투두 수 */}
            <span>
              ☑️ {completedCount}
            </span>
          </S.TodoStatusBar>
        )}
      />
    </S.CalendarContainer>
  );
};

export default CustomCalendar;