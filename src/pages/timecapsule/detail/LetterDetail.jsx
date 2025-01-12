import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/LetterDetail.style';
import { fetchLetterData } from '../../../api/directoryLetter';

const LetterDetail = () => {
  const { letterId } = useParams();
  const location = useLocation();
  const [letterData, setLetterData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchLetterData('타임캡슐');

      const selectedLetter = data.find((letter) => letter.id === letterId);
      setLetterData(selectedLetter || null);
    };

    loadData();
  }, [letterId]);

  console.log(letterData);

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
    <S.LetterDetailContainer>
      <S.BackButton onClick={() => window.history.back()}>&larr;</S.BackButton>
      <S.Title>
        💌 2025년 {letterData.createdAt}의 내가 미래의 나에게 보낸 편지 💌
      </S.Title>
      <S.LetterContent id="letter">
        <S.BodyText>{letterData.content}</S.BodyText>
      </S.LetterContent>
      <S.DownloadButton onClick={handleDownload}>
        📥 PDF로 다운로드
      </S.DownloadButton>
    </S.LetterDetailContainer>
  );
};

export default LetterDetail;
