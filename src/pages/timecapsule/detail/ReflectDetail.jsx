import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/ReflectDetail.style';
import { fetchLetterData } from '../../../api/directoryLetter';

import { StarsBackground } from '../../../components/timecapsule/write/StarsBackground';
import { useEmotion } from '../../../context/EmotionProvider';

const ReflectDetail = () => {
  const location = useLocation();
  const { letterId } = useParams();
  const [letterData, setLetterData] = useState(null);

  const [currentYear, setCurrentYear] = useState('');
  const { selectedEmotion } = useEmotion();

  useEffect(() => {
    console.log("Selected Emotion in ReflectDetail:", selectedEmotion);
    // 현재 연도를 가져옴
    const year = new Date().getFullYear();
    setCurrentYear(year);

    const loadData = async () => {
      const data = await fetchLetterData('일일회고');

      const selectedLetter = data.find((letter) => letter.id === letterId);
      setLetterData(selectedLetter || null);
    };

    loadData();
  }, [letterId, selectedEmotion]);

  const handleDownload = () => {
    const input = document.getElementById('letter');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save('letter-detail.pdf');
    });
  };

  return (
    <S.ReflectDetailContainer>
      <StarsBackground />

        <S.BackButton onClick={() => window.history.back()}>
          &larr;
        </S.BackButton>

        <S.Title>
          🍀 {currentYear}년 {letterData?.createdAt} 일일 회고 🍀
        </S.Title>

        <S.ReflectContent id="letter">
          <S.BodyText>오늘의 감정: {selectedEmotion || '이모티콘이 선택되지 않았습니다.'}</S.BodyText>
          <S.BodyText>{letterData ? letterData.content : '내용이 없습니다.'}</S.BodyText>
        </S.ReflectContent>
        
        <S.DownloadButton onClick={handleDownload}>
          📥 PDF로 다운로드
        </S.DownloadButton>
    </S.ReflectDetailContainer>
  );
};

export default ReflectDetail;
