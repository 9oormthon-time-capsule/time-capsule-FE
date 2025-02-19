import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/ReflectDetail.style';
import { fetchLetterData } from '../../../api/directoryLetter';
import { StarsBackground } from '../../../components/timecapsule/write/StarsBackground';
import useLetterData from '../../../hooks/useLetterData';
import Loading from '../../../components/common/Loading';

const ReflectDetail = () => {
  const { letterId } = useParams();
  const inputRef = useRef(null);
  const year = new Date().getFullYear();

  const { letterQuery } = useLetterData('일일회고');
  const { data: reflectData, isLoading, isFetching } = letterQuery;

  const selectedLetter = reflectData?.find((letter) => letter.id === letterId);

  if (isLoading || isFetching) {
    return <Loading />;
  }

  const handleDownload = () => {
    const textContainer = inputRef.current.querySelector('.text-container');

    html2canvas(textContainer).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save(`${letterId}.pdf`);
    });
  };

  return (
    <S.ReflectDetailContainer ref={inputRef}>
      <S.BackButton onClick={() => window.history.back()}>{'<'}</S.BackButton>
      <div className="text-container">
        <StarsBackground />
        <S.Title>
          🍀 {year}년 {selectedLetter.createdAt} 일일 회고 🍀
        </S.Title>

        <S.ReflectContent>
          <S.BodyText>
            {selectedLetter.emoji
              ? `오늘의 감정 : ${selectedLetter.emoji}`
              : ''}
          </S.BodyText>
          <br />
          <S.BodyText>{selectedLetter.content}</S.BodyText>
        </S.ReflectContent>
      </div>
      <S.DownloadButton onClick={handleDownload}>
        📥 PDF로 다운로드
      </S.DownloadButton>
    </S.ReflectDetailContainer>
  );
};

export default ReflectDetail;
