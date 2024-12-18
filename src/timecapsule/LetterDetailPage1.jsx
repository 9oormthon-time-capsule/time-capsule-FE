import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf';

const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto;
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
  margin-bottom: 30px;
  margin-top: 80px;
`;

const Letter = styled.div`
  background-image: url('capsule_letterbackimg.png');
  background-size: cover;          
  background-position: center;    
  background-repeat: no-repeat;    
  border-radius: 10px;
  padding: 180px; margin-top: -100px;
  width: 800px;
  height: 1000px;         
  position: relative;       
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ToText = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  position: absolute;
  top: 180px;
  left: 130px;                    
`;

const BodyText = styled.p`
  margin: 60px 0;
  line-height: 1.6;
`;

const FromText = styled.p`
  margin-top: 20px; margin-right: -50px;
  font-weight: bold;
  text-align: right;
  font-style: italic;
`;

const DownloadButton = styled.button`
  padding: 20px 60px;
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 60px;

  &:hover {
    background: linear-gradient(135deg, #2e7d32, #1b5e20);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 2px solid #66bb6a;
    outline-offset: 2px;
  }
`;

const LetterDetailPage1 = () => {
  const location = useLocation();
  const { letterContent } = location.state || {
    letterContent: {
      to: '2026년의 나에게 보내는 편지',
      body: '미래의 나에게 보내는 메시지를 여기에 작성했습니다. 1년 동안 많은 일들이 있었겠지요?',
      from: '2025년의 내가 보내는 편지',
    },
  };

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
      <BackButton onClick={() => window.history.back()}>&larr;</BackButton>

      <Title>💌작년 1월의 내가 미래의 나에게 보내온 편지💌</Title>
      
      <Letter id="letter">
        <ToText>To. {letterContent.to}</ToText>
        <BodyText>{letterContent.body}</BodyText>
        <FromText>from. {letterContent.from}</FromText>
      </Letter>
      
      <DownloadButton onClick={handleDownload}>
        📥 PDF로 다운로드
      </DownloadButton>
    </Container>
  );
};

export default LetterDetailPage1;

