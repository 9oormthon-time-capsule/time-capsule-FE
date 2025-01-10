import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/LetterDetail.style';

import { fetchLetterData } from '../../../api/letter'; // API 호출 함수 불러오기

const LetterDetail = () => {
  // const { userId } = useParams(); // URL에서 userId를 가져옵니다.
  const navigate = useNavigate();
  const [letterContent, setLetterContent] = useState({
    to: '',
    body: '',
    from: '',
  });
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // API 호출을 통해 편지 데이터를 가져옵니다.
  useEffect(() => {
    const fetchLetter = async () => {
      try {
        const letter = await fetchLetterData(); // API 호출 함수 사용
        setLetterContent(letter);
      } catch (err) {
        setError('편지 데이터를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchLetter();
  }, []);

  // PDF 다운로드 함수
  const handleDownload = () => {
    const input = document.getElementById('letter');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save('letter-detail.pdf');
    });
  };

  // 로딩 상태 처리
  if (loading) {
    return <div>로딩 중...</div>;
  }

  // 에러 상태 처리
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <S.LetterDetailContainer>
      <S.BackButton onClick={() => navigate(-1)}>&larr;</S.BackButton>
      <S.Title>💌작년 1월의 내가 미래의 나에게 보내온 편지💌</S.Title>
      <S.LetterContent id="letter">
        <S.ToText>To. {letterContent.to}</S.ToText>
        <S.BodyText>{letterContent.body}</S.BodyText>
        <S.FromText>from. {letterContent.from}</S.FromText>
      </S.LetterContent>
      <S.DownloadButton onClick={handleDownload}>📥 PDF로 다운로드</S.DownloadButton>
    </S.LetterDetailContainer>
  );
};

export default LetterDetail;