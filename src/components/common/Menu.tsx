import * as S from '../../styles/common/Menu.style';
import { useLocation, useNavigate } from 'react-router-dom';
import API from '../../api';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const menuItems = (() => {
    if (location.pathname.startsWith('/todo')) {
      return [
        { path: `/main`, label: '나의 타임캡슐' },
        { path: '/todo/category/new', label: '카테고리 등록' },
        { path: '/todo/category', label: '카테고리 관리' },
      ];
    } else if (location.pathname.startsWith('/directory')) {
      return [
        { path: `/main`, label: '나의 타임캡슐' },
        { path: `/todo`, label: '나의 Todo' },
      ];
    } else {
      return [
        { path: `/todo`, label: '나의 Todo' },
        { path: `/directory/letter`, label: '나의 편지함' },
      ];
    }
  })();

  const handleLogout = async () => {
    try {
      const response = await API.post(
        '/logout',
        {},
        {
          withCredentials: true,
        },
      );
      if (response.status === 200) navigate('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  const handleWithdraw = async () => {
    try {
      const response = await API.delete('/withdraw', {
        withCredentials: true,
      });

      if (response.status === 200) {
        alert(response.data.message);
        navigate('/');
      }
    } catch (error) {
      console.error('회원 탈퇴 실패:', error);
      alert('회원 탈퇴에 실패했습니다.');
    }
  };

  return (
    <S.MenuContainer>
      {menuItems.map((item) => (
        <S.MenuItem key={item.path} onClick={() => handleNavigate(item.path)}>
          {item.label}
        </S.MenuItem>
      ))}
      <S.MenuItem onClick={handleLogout}>로그아웃</S.MenuItem>
      <S.MenuItem onClick={handleWithdraw}>회원 탈퇴</S.MenuItem>
    </S.MenuContainer>
  );
};

export default Menu;
