import { useState } from 'react';
import LetterMenuOverlay from './LetterMenuOverlay';
import * as S from '../../../styles/timecapsule/main/LetterCreateButton.style';

const LetterCreateButton = () => {
	const [isClicked, setIsClicked] = useState(false);

	const handleLetterCreatebutton = () => {
		setIsClicked((prev) => !prev);
	};

	return (
		<>
			{isClicked && <LetterMenuOverlay setIsClicked={setIsClicked}/>}
			<S.LetterMenuContainer>
				<S.ButtonFrame onClick={handleLetterCreatebutton}>
				<img
						src={isClicked ? '/main/Close.svg' : '/main/Plus.svg'}
						width={isClicked ? 28 : 35}
						height={isClicked ? 28 : 35}
						alt="toggle-button"
					/>
				</S.ButtonFrame>
			</S.LetterMenuContainer>
		</>
	);
};

export default LetterCreateButton;