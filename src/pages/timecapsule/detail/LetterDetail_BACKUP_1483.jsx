<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/LetterDetail.style';
import { fetchReflectData } from '../../../api/letter';  // Reflect 데이터 요청 함수

const LetterDetail = () => {
  const navigate = useNavigate();
  const [letterContent, setLetterContent] = useState({}); // 편지 데이터 초기값을 빈 객체로 설정
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reflect 데이터 요청
        const reflect = await fetchReflectData();
        if (reflect && reflect.length > 0) {
          setLetterContent(reflect[0]); // 첫 번째 편지 데이터만 표시 (예: 가장 최근 편지)
        }
        console.log('Reflect Data:', reflect);  // 데이터 콘솔 출력
      } catch (err) {
        setError('데이터를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);  // 컴포넌트가 처음 렌더링될 때만 호출

  // PDF 다운로드 함수
=======
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

>>>>>>> 70cd399681d109b6c9f9505ff7cb91be94f68723
  const handleDownload = () => {
    const input = document.getElementById('letter');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save('letter-detail.pdf');
    });
  };

<<<<<<< HEAD
  // 로딩 상태 처리
  if (loading) {
    return <div>로딩 중...</div>;
  }

  // 에러 상태 처리
  if (error) {
    return <div>{error}</div>;
  }

  // letterContent가 존재하면 그 내용을 화면에 표시
  return (
    <S.LetterDetailContainer>
      <S.BackButton onClick={() => navigate(-1)}>&larr;</S.BackButton>
      <S.Title>💌작년 1월의 내가 미래의 나에게 보내온 편지💌</S.Title>
      {letterContent && (
        <S.LetterContent id="letter">
          <S.ToText>To. {letterContent.to}</S.ToText>
          <S.BodyText>{letterContent.body}</S.BodyText>
          <S.FromText>from. {letterContent.from}</S.FromText>
        </S.LetterContent>
      )}
      <S.DownloadButton onClick={handleDownload}>📥 PDF로 다운로드</S.DownloadButton>
=======
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
>>>>>>> 70cd399681d109b6c9f9505ff7cb91be94f68723
    </S.LetterDetailContainer>
  );
};

export default LetterDetail;
