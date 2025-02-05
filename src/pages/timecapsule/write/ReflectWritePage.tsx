import * as S from '../../../styles/timecapsule/write/WritePage.style';
import WriteForm from '../../../components/timecapsule/write/WriteForm';
import { StarsBackground } from '../../../components/timecapsule/write/StarsBackground';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

export default function ReflectWritePage() {
  // letterId 가져오기
  const { letterId } = useParams();

  const emotions = [
    { id: 'angry', emoji: '😠' },
    { id: 'sad', emoji: '😢' },
    { id: 'soso', emoji: '😐' },
    { id: 'happy', emoji: '🙂' },
    { id: 'excited', emoji: '😆' },
  ];

  // 선택된 이모지를 저장할 상태
  const [selectedEmotion, setSelectedEmotion] = useState<string | undefined>(
    localStorage.getItem(`selectedEmotion_${letterId}`) || undefined
  );

  useEffect(() => {
    if (!letterId) return;

    // ✅ LocalStorage에서 저장된 이모지가 있으면 불러오기
    const savedEmotion = localStorage.getItem(`selectedEmotion_${letterId}`);
    if (savedEmotion) {
      setSelectedEmotion(savedEmotion);
    }
  }, [letterId]);

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
