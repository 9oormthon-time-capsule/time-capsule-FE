import CustomCalendar from '../../components/todo/main/Calendar';
import AddTodo from '../../components/todo/main/AddTodo';
import TodoHeader from '../../components/todo/main/TodoHeader';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/todo/TodoMainPage.style';

const TodoMainPage = () => {
	return (
		<MainLayout>
			<S.Container>
				<TodoHeader />
				<S.Content>
					<CustomCalendar />
					<AddTodo />
				</S.Content>
			</S.Container>
		</MainLayout>
	);
};

export default TodoMainPage;
