// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import * as S from '../../../styles/timecapsule/detail/ReflectDetail.style';

// const ReflectDetail = () => {
// 	const location = useLocation();
// 	const { letterContent } = location.state || {
// 		letterContent: {
// 			to: '나에게',
// 			body: '오늘의 나에게 보내는 메시지를 여기에 작성했습니다.',
// 			from: '오늘의 내가',
// 		},
// 	};

// 	const handleDownload = () => {
// 		const input = document.getElementById('letter');
// 		html2canvas(input).then((canvas) => {
// 			const imgData = canvas.toDataURL('image/png');
// 			const pdf = new jsPDF();
// 			pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
// 			pdf.save('letter-detail.pdf');
// 		});
// 	};

// 	return (
// 		<S.ReflectDetailContainer>
// 			<S.BackButton onClick={() => window.history.back()}>&larr;</S.BackButton>
// 			<S.Title>💌2026년 1월 1일 나에게 작성한 편지💌</S.Title>
// 			<S.ReflectContent id="letter">
// 				<S.ToText>To. {letterContent.to}</S.ToText>
// 				<S.BodyText>{letterContent.body}</S.BodyText>
// 				<S.FromText>from. {letterContent.from}</S.FromText>
// 			</S.ReflectContent>
// 			<S.DownloadButton onClick={handleDownload}>
// 				📥 PDF로 다운로드
// 			</S.DownloadButton>
// 		</S.ReflectDetailContainer>
// 	);
// };

// export default ReflectDetail;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';
import * as S from '../../../styles/timecapsule/detail/ReflectDetail.style';

const ReflectDetail = () => {
  const location = useLocation();
  const [letterContent, setLetterContent] = useState({
    to: '',
    body: '',
    from: '',
  });

  const fetchLetterData = async () => {
    try {
      const apiUrl = 'http://localhost:4000/api/timecapsule/reflect';
      const response = await axios.get(apiUrl, {
        withCredentials: true,
      });

      const data = response.data;

      if (data && data.length > 0) {
        const latestLetter = data[0];
        setLetterContent({
          to: latestLetter.to || '나에게',
          body: latestLetter.content || '편지 내용이 없습니다.',
          from: latestLetter.from || '보낸 사람',
        });
      }
    } catch (error) {
      console.error('데이터를 가져오는 데 오류가 발생했습니다:', error);
    }
  };

  useEffect(() => {
    fetchLetterData();
  }, []);

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
      <S.BackButton onClick={() => window.history.back()}>&larr;</S.BackButton>
      <S.Title>💌2026년 1월 1일 나에게 작성한 편지💌</S.Title>
      <S.ReflectContent id="letter">
        <S.ToText>To. {letterContent.to}</S.ToText>
        <S.BodyText>{letterContent.body}</S.BodyText>
        <S.FromText>from. {letterContent.from}</S.FromText>
      </S.ReflectContent>
      <S.DownloadButton onClick={handleDownload}>
        📥 PDF로 다운로드
      </S.DownloadButton>
    </S.ReflectDetailContainer>
  );
};

export default ReflectDetail;
