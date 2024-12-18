import React, { useState } from 'react';
import {
	Container,
	SubTitle,
	Text,
	TitleWrapper,
	EmotionBox,
	EmotionLabel,
} from '../../styles/WritePageStyles';
import WriteForm from '../../components/WriteForm';
import { StarsBackgroundWrapper } from '../../components/StarsBackgroundWrapper';

export default function ReflectWritePage() {
	const emotions = [
		{ id: 'angry', emoji: '😠' },
		{ id: 'sad', emoji: '😢' },
		{ id: 'soso', emoji: '😐' },
		{ id: 'happy', emoji: '🙂' },
		{ id: 'excited', emoji: '😆' },
	];

	const [selectedEmotion, setSelectedEmotion] = useState(null);

	const handleEmotionChange = (emotion) => {
		setSelectedEmotion((prev) => (prev === emotion ? null : emotion));
	};

	return (
		<Container>
			<StarsBackgroundWrapper />
			<TitleWrapper>
				<Text>오늘의 회고</Text>
				<SubTitle>오늘은 어떤 하루였나요?</SubTitle>
			</TitleWrapper>
			<EmotionBox>
				{emotions.map((emotion) => (
					<EmotionLabel
						key={emotion.id}
						onClick={() => handleEmotionChange(emotion.id)}
						isSelected={selectedEmotion === emotion.id}
					>
						<span>{emotion.emoji}</span>
					</EmotionLabel>
				))}
			</EmotionBox>
			<WriteForm placeholder={'오늘 나의 하루를 되돌아보세요!'} />
		</Container>
	);
}
