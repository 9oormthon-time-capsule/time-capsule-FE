import * as S from '../../../styles/timecapsule/write/WritePage.style';
import WriteForm from '../../../components/timecapsule/write/WriteForm';
import { StarsBackground } from '../../../components/timecapsule/write/StarsBackground';
import { useState } from 'react';

export default function ReflectWritePage() {

  const emotions = [
    { id: 'angry', emoji: '😠' },
    { id: 'sad', emoji: '😢' },
    { id: 'soso', emoji: '😐' },
    { id: 'happy', emoji: '🙂' },
    { id: 'excited', emoji: '😆' },
  ];

  const [selectedEmotion, setSelectedEmotion] = useState<string | undefined>(undefined);

  const handleEmotionChange = (emotion: string) => {
    setSelectedEmotion((prev) => (prev === emotion ? undefined : emotion));
  };
  
  return (
    <S.WriteContainer>
      <StarsBackground />
      <S.TitleContainer>
        <S.Title>오늘의 회고</S.Title>
        <S.SubTitle>오늘은 어떤 하루였나요?</S.SubTitle>
      </S.TitleContainer>
      <S.EmotionBox>
        {emotions.map((emotion) => (
          <S.EmotionLabel
            key={emotion.id}
            onClick={() => handleEmotionChange(emotion.emoji)}
            isSelected={selectedEmotion === emotion.emoji}
          >
            <span>{emotion.emoji}</span>
          </S.EmotionLabel>
        ))}
      </S.EmotionBox>
      <WriteForm
        placeholder="오늘 나의 하루를 되돌아보세요!"
        mode="reflect"
        emoji={selectedEmotion}
      />
    </S.WriteContainer>
  );
}
