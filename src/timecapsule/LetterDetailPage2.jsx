import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import html2canvas from 'html2canvas'; // For generating image
import jsPDF from 'jspdf'; // For generating PDF

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px auto;
  width: 90%;
`;

const BackButton = styled.button`
  align-self: flex-start;
  font-size: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Letter = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ToText = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const BodyText = styled.p`
  margin: 10px 0;
  line-height: 1.5;
`;

const FromText = styled.p`
  margin-top: 20px;
  text-align: right;
  font-style: italic;
`;

const DownloadButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LetterDetailPage1 = () => {
  // Retrieve the letter content from location state or fallback
  const location = useLocation();
  const { letterContent } = location.state || {
    letterContent: {
      to: '나',
      body: '오늘의 나에게 보내는 메시지를 여기에 작성했습니다.',
      from: '오늘의 나에게',
    },
  };

  // Function to handle PDF/ Image download
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
    <Container>
      <BackButton onClick={() => window.history.back()}>
        &larr;
      </BackButton>

      <Title>2026년 1월 1일 나에게 작성한 편지</Title>
      
      <Letter id="letter">
        <ToText>To. {letterContent.to}</ToText>
        <BodyText>{letterContent.body}</BodyText>
        <FromText>from. {letterContent.from}</FromText>
      </Letter>

      <DownloadButton onClick={handleDownload}>
        📥 다운로드
      </DownloadButton>
    </Container>
  );
};

export default LetterDetailPage1;
