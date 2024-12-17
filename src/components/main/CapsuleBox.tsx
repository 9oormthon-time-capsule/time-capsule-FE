import styled from 'styled-components';
import Box1 from '../../assets/images/Box-1.png';
import Capsule from '../../assets/icon/Capsule.svg';

const CapsuleBox = () => {
	return (
		<Wrapper>
			<TitleContainer>
				<TopSection>2026년의 나에게</TopSection>
                <BottomSection>
                    <img src={Capsule} width={50} height={35}/>
                    <span>0</span>개의 편지가 보관되어있어요!
                </BottomSection>
			</TitleContainer>
			<BoxContainer>
				<img src={Box1} width={450} height={400} />
			</BoxContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    height: 80vh;
`

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
    margin-bottom: 20px;
`;

const TopSection = styled.div`
    display: flex;
    justify-content: center;
	font-size: 26px;
	font-weight: bold;
`;

const BottomSection = styled.div`
    display: flex;
	font-size: 26px;
    justify-content: center;
    align-items: center;

    img {
        margin-bottom: 6px;
    }

    span {
        font-size: 32px;
        font-weight: bold;
        margin-right: 5px;
    }
`;

const BoxContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: end;
	width: 100%;
    cursor: pointer;
`;

export default CapsuleBox;
