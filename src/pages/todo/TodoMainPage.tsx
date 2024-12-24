import CustomCalendar from '../../components/todo/main/Calendar';
import AddTodo from '../../components/todo/main/AddTodo';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/todo/TodoMainPage.style';
import Header from '../../components/common/Header';

const TodoMainPage = () => {
	return (
		<MainLayout>
			<S.Container>
				<Header />
				<S.Content>
					<CustomCalendar />
					<AddTodo />
				</S.Content>
			</S.Container>
		</MainLayout>
	);
};

export default TodoMainPage;
