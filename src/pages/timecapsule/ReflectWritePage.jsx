import React from 'react';
import {
	Container,
	SubTitle,
	Text,
	TitleWrapper,
	EmotionBox,
} from '../../styles/WritePageStyles';
import WriteForm from '../../components/WriteForm';
import { StarsBackgroundWrapper } from '../../components/StarsBackgroundWrapper';

export default function ReflectWritePage() {
	return (
		<Container>
			<StarsBackgroundWrapper />
			<TitleWrapper>
				<Text>오늘의 회고</Text>
				<SubTitle>오늘은 어떤 하루였나요?</SubTitle>
			</TitleWrapper>
			<EmotionBox>
				<label>
					<input type="checkbox" />
					<span>😠</span>
				</label>
				<label>
					<input type="checkbox" />
					<span>😢</span>
				</label>
				<label>
					<input type="checkbox" />
					<span>😐</span>
				</label>
				<label>
					<input type="checkbox" />
					<span>🙂</span>
				</label>
				<label>
					<input type="checkbox" />
					<span>😆</span>
				</label>
			</EmotionBox>
			<WriteForm placeholder={'오늘 나의 하루를 기록해보세요!'} />
		</Container>
	);
}
