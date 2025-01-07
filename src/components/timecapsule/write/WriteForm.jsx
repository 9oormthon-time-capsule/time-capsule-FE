import React, { useState } from 'react';
import * as S from '../../../styles/timecapsule/write/WriteForm.style';
import WriteButton from './WriteButton';
import { submitLetter } from '../../../api/letter';

export default function WriteForm({ placeholder, mode }) {
  const [content, setContent] = useState('');

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleWriteButton = async (event) => {
    event.preventDefault();

    if (!content.trim()) {
      alert('편지 내용을 입력해주세요.');
      return;
    }

    try {
      if (mode === 'letter') {
        await submitLetter(content);
        alert('편지가 등록되었습니다.');
        window.location.href = '/directory/time/1';
      }
    } catch (error) {
      alert('편지 등록에 실패했습니다. 다시 시도해주세요.');
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
      <WriteButton
        onClick={handleWriteButton}
        type="submit"
        text={'작성하기'}
      />
    </S.FormContainer>
  );
}
