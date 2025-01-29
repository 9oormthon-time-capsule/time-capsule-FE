import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/ReflectDetail.style';
import { fetchLetterData } from '../../../api/directoryLetter';

import { StarsBackground } from '../../../components/timecapsule/write/StarsBackground';

const ReflectDetail = () => {
  const location = useLocation();
  const { letterId } = useParams();

  const [reflectData, setReflectData] = useState(null);
  const [currentYear, setCurrentYear] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [selectedEmotion, setSelectedEmotion] = useState(null);

  useEffect(() => {
    // 현재 연도 가져오기
    const year = new Date().getFullYear();
    setCurrentYear(year);

    const loadData = async () => {
      try {
        const data = await fetchLetterData('일일회고');
        console.log("Fetched Reflect Data:", data);

        const selectedLetter = data.find((letter) => letter.id === letterId);
        console.log("🔍 Selected Letter Data:", selectedLetter);

        if (selectedLetter) {
          setReflectData(selectedLetter);
          setSelectedEmotion(selectedLetter.emoji ?? '이모티콘이 없습니다.');
          console.log("✅ Selected Emotion:", selectedLetter.emoji);
        } else {
          setSelectedEmotion('이모티콘이 없습니다.');
        }
      } catch (error) {
        console.error("Error fetching letter data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [letterId]); 

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
        🍀 {currentYear}년 {reflectData?.createdAt || "날짜 없음"} 일일 회고 🍀
      </S.Title>

      <S.ReflectContent id="letter">
        <S.BodyText>
          오늘의 감정: {selectedEmotion ? selectedEmotion : '이모티콘이 없습니다.'}
        </S.BodyText>

        <S.BodyText>
          {reflectData?.content || '회고 내용이 없습니다.'}
        </S.BodyText>
      </S.ReflectContent>

      <S.DownloadButton onClick={handleDownload}>
        📥 PDF로 다운로드
      </S.DownloadButton>
    </S.ReflectDetailContainer>
  );
};

export default ReflectDetail;
