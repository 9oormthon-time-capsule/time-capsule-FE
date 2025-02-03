import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/LetterDetail.style';

import { StarsBackground } from '../../../components/timecapsule/write/StarsBackground';

import API from '../../../api';

const LetterDetail = () => {
	const location = useLocation();
	
	const { letterId } = useParams();
	const [letterContent, setLetterContent] = useState(null);

	const inputRef = useRef(null);

	useEffect(() => {
		const getLetterContent = async () => {
			if (!letterId) return; // letterId가 없으면 요청 안 함

		try {
			const response = await API.get(`/timecapsule/letter`, {
				withCredentials: true,
			});
			console.log("Fetched Letter Content:", response.data);

			// 📌 여러 개의 편지 중에서 현재 URL의 letterId와 일치하는 편지 찾기
			const selectedLetter = response.data.find(letter => letter.id === letterId);
      
			setLetterContent(selectedLetter || null); // 없으면 null 설정
		  } catch (error) {
			console.error(`Error fetching letter content (${letterId}):`, error);
		  }
		};

		getLetterContent();
	}, [letterId]); // letterId가 변경될 때마다 실행

	const handleDownload = () => {
		// const input = document.getElementById('letter');
		const input = inputRef.current;

		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF();
			pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
			pdf.save('letter-detail.pdf');
		});
	};

	return (
		<S.LetterDetailContainer>
			<StarsBackground />

			<S.BackButton onClick={() => window.history.back()}>
				&larr;
			</S.BackButton>

			<S.Title>
				💌 {letterContent ? new Date(letterContent.createdAt.seconds * 1000).toISOString().split("T")[0] : "로딩 중..."}의 내가 미래의 나에게 보내온 편지 💌
			</S.Title>

			<S.LetterContent ref={inputRef} id="letter">
				<S.BodyText>{letterContent?.content || "로딩 중..."}</S.BodyText>
			</S.LetterContent>

			<S.DownloadButton onClick={handleDownload}>
				📥 PDF로 다운로드
			</S.DownloadButton>
		</S.LetterDetailContainer>
	);
};

export default LetterDetail;
