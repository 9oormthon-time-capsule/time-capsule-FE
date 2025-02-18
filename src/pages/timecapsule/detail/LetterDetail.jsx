import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/LetterDetail.style';
import { StarsBackground } from '../../../components/timecapsule/write/StarsBackground';
import useLetterData from '../../../hooks/useLetterData';
import Loading from '../../../components/common/Loading';

const LetterDetail = () => {
  const { letterId } = useParams();
  const inputRef = useRef(null);
  const { letterQuery } = useLetterData('타임캡슐');
  const { data: letterData, isLoading } = letterQuery;
  const selectedLetter = letterData?.find((letter) => letter.id === letterId);

  if (isLoading || !selectedLetter) {
    return <Loading />;
  }

  const handleDownload = () => {
    const textContainer = inputRef.current.querySelector('.text-container');

    html2canvas(textContainer).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save('letter-detail.pdf');
    });
  };

  return (
    <S.LetterDetailContainer ref={inputRef}>
      <StarsBackground />
      <S.BackButton onClick={() => window.history.back()}>&larr;</S.BackButton>
      <div className="text-container">
        <S.Title>
          💌{' '}
          {
            new Date(selectedLetter.realDate.seconds * 1000)
              .toISOString()
              .split('T')[0]
          }{' '}
          의 내가 미래의 나에게 보내온 편지 💌
        </S.Title>

        <S.LetterContent ref={inputRef} id="letter">
          <S.BodyText>{selectedLetter.content}</S.BodyText>
        </S.LetterContent>
      </div>
      <S.DownloadButton onClick={handleDownload}>
        📥 PDF로 다운로드
      </S.DownloadButton>
    </S.LetterDetailContainer>
  );
};

export default LetterDetail;
