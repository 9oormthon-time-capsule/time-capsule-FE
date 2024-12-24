import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainLayout from '../../../layout/MainLayout';
import Menu from '../../../components/common/Menu';
import * as S from '../../../styles/timecapsule/directory/Directory.style';
import { CAPSULE, CAPSULE_MAIN, CAPSULE_IMAGE } from '../../../mock/capsule';

function Directory() {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const currentPath = window.location.pathname;
	const isTimeCapsule = currentPath.includes('/directory/time');

	const [capsuleData, setCapsuleData] = useState(
		isTimeCapsule ? CAPSULE_MAIN : CAPSULE,
	);
	const [directoryType, setDirectoryType] = useState(
		isTimeCapsule ? '타임캡슐' : '일일회고',
	);
	const [directoryButton, setDirectoryButton] = useState(
		isTimeCapsule ? '일일회고 보러가기' : '타임캡슐 보러가기',
	);

	const handleDirectoryButton = () => {
		if (directoryButton === '타임캡슐 보러가기') {
			setDirectoryButton('일일회고 보러가기');
			setDirectoryType('타임캡슐');
			setCapsuleData(CAPSULE_MAIN);
			navigate('/directory/time/1');
		}

		if (directoryButton === '일일회고 보러가기') {
			setDirectoryButton('타임캡슐 보러가기');
			setDirectoryType('일일회고');
			setCapsuleData(CAPSULE);
			navigate('/directory/diary/1');
		}
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

  const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<MainLayout>
			<S.Header>
				<S.LeftBox>
					<S.LogoText href="/main">Time Capsule</S.LogoText>
					<S.TitleText>익명 님의 {directoryType} 보관함</S.TitleText>
					<S.ChangeButton onClick={handleDirectoryButton}>
						{directoryButton}
					</S.ChangeButton>
				</S.LeftBox>
				<S.RightBox>
					<S.MenuImg
						src="/header/menu.svg"
						width={35}
						height={35}
						onClick={toggleMenu}
					/>
					{isMenuOpen && (
						<>
							<S.Overlay onClick={closeMenu} />
							<Menu />
						</>
					)}
				</S.RightBox>
			</S.Header>
			<S.CapsuleContainer>
				{capsuleData.map((data, index) => (
					<S.CapsuleBox key={index}>
						<S.CapsuleLabelBox>
							<S.CapsuleLabel>{data.day}</S.CapsuleLabel>
						</S.CapsuleLabelBox>
						<a
							href={
								directoryType === '타임캡슐'
									? '/detail/letter/1'
									: '/detail/reflect/1'
							}
						>
							<S.CapsuleImg
								src={CAPSULE_IMAGE[index % CAPSULE_IMAGE.length]}
								alt={data.day}
							/>
						</a>
					</S.CapsuleBox>
				))}
			</S.CapsuleContainer>
		</MainLayout>
	);
}

export default Directory;
