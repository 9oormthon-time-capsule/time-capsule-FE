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

  console.log('Emotion in WritePage:', selectedEmotion);

  // const handleEmotionChange = (emotion: string) => {
  //   setSelectedEmotion((prev) => (prev === emotion ? undefined : emotion));
  // };
  const handleEmotionChange = (emotion: string) => {
    setSelectedEmotion((prev) => {
      const newEmotion = prev === emotion ? undefined : emotion;
      if (letterId) {
        // letterId에 맞게 localStorage에 저장
        localStorage.setItem(`selectedEmotion_${letterId}`, newEmotion || '');
      }
      return newEmotion;
    });
  };

  // `selectedEmotion` 변경될 때마다 `localStorage`에 저장
  useEffect(() => {
    if (letterId && selectedEmotion) {
      localStorage.setItem(`selectedEmotion_${letterId}`, selectedEmotion);
      console.log('Saved to localStorage:', `selectedEmotion_${letterId}`, selectedEmotion);
    }
  }, [selectedEmotion, letterId]);

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
