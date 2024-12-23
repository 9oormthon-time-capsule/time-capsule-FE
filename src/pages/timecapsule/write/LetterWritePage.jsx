import React from 'react';
import {
	Container,
	SubTitle,
	Text,
	TitleWrapper,
} from '../../../styles/timecapsule/write/WritePage.style';
import LetterForm from '../../../components/timecapsule/write/WriteForm';
import { StarsBackgroundWrapper } from '../../../components/timecapsule/write/StarsBackgroundWrapper';

export default function LetterWritePage() {
	return (
		<Container>
			<StarsBackgroundWrapper />
			<TitleWrapper>
				<Text>Time Capsule</Text>
				<SubTitle>미래의 나에게 편지를 보내자!</SubTitle>
			</TitleWrapper>
			<LetterForm placeholder={'편지를 작성해보세요!'} />
		</Container>
	);
}
