import { useState } from 'react';
import LetterMenuOverlay from './LetterMenuOverlay';
import * as S from '../../../styles/timecapsule/main/LetterCreateButton.style';

const LetterCreateButton = () => {
	const [isClicked, setIsClicked] = useState(false);

	const handleLetterCreatebutton = () => {
		setIsClicked(true);
	};

	return (
		<>
			{isClicked && <LetterMenuOverlay />}
			<S.LetterMenuContainer>
				<S.ButtonFrame onClick={handleLetterCreatebutton}>
					<img src="/main/Plus.svg" width={35} height={35} />
				</S.ButtonFrame>
			</S.LetterMenuContainer>
		</>
	);
};

export default LetterCreateButton;
