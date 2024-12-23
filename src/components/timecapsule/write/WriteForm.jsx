import React from 'react';
import * as S from '../../../styles/timecapsule/write/WriteForm.style';
import WriteButton from './WriteButton';

export default function WriteForm({ placeholder }) {
	const currentPath = window.location.pathname;

	const handleWriteButton = (event) => {
		event.preventDefault();

		if (currentPath === '/write/letter') {
			window.location.href = '/directory/time/1';
		} else {
			window.location.href = '/directory/diary/1';
		}
	};

	return (
		<S.FormContainer>
			<S.ContentTextArea placeholder={placeholder} required />
			<WriteButton
				onClick={handleWriteButton}
				type="submit"
				text={'작성하기'}
			/>
		</S.FormContainer>
	);
}
