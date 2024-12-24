import * as S from '../../../styles/timecapsule/main/CapsuleBox.style';

const CapsuleBox = () => {
	const handleCapsuleBox = () => {
		window.location.href = '/directory/time/1';
	};

	return (
		<S.CapsuleBoxContainer>
			<S.TitleContainer>
				<S.TopSection>2026년의 나에게</S.TopSection>
				<S.BottomSection>
					<img src="/main/Capsule.svg" width={50} height={35} />
					<span>0</span>개의 편지가 보관되어있어요!
				</S.BottomSection>
			</S.TitleContainer>
			<S.BoxContainer onClick={handleCapsuleBox}>
				<img src="/main/Box-1.png" width={450} height={400} />
			</S.BoxContainer>
		</S.CapsuleBoxContainer>
	);
};

export default CapsuleBox;
