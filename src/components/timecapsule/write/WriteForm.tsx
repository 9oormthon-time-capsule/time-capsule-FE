import React, { useState } from 'react';
import * as S from '../../../styles/timecapsule/write/WriteForm.style';
import WriteButton from './WriteButton';
import { submitLetter } from '../../../api/letter';
import { submitReflect } from '../../../api/reflect';

interface WriteFormProps {
  placeholder: string;
  mode: 'letter' | 'reflect';
  emoji?: string;
}

export default function WriteForm({
  placeholder,
  mode,
  emoji,
}: WriteFormProps) {
  const [content, setContent] = useState('');

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContent(event.target.value);
  };

  const handleWriteButton = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (mode === 'reflect' && !emoji) {
      alert('오늘의 감정을 선택해주세요.');
      return;
    }

    if (!content.trim()) {
      alert(`${mode === 'letter' ? '편지' : '회고'}를 작성해주세요.`);
      return;
    }

    try {
      if (mode === 'letter') {
        await submitLetter(content);
        alert('편지가 등록되었습니다.');
        window.location.href = '/directory/time';
      } else if (mode === 'reflect') {
        await submitReflect(content, emoji!);
        alert('회고가 등록되었습니다.');
        window.location.href = '/directory/reflect';
      }
    } catch {
      alert(
        `${mode === 'letter' ? '편지' : '회고'} 등록에 실패했습니다. 다시 시도해주세요.`,
      );
    }
  };

  return (
    <S.FormContainer>
      <S.ContentTextArea
        placeholder={placeholder}
        required
        value={content}
        onChange={handleContentChange}
      />
      <WriteButton onClick={(e) => handleWriteButton(e)} text={'작성하기'} />
    </S.FormContainer>
  );
}
