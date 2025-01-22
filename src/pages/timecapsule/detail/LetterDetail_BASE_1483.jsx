import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/LetterDetail.style';

const LetterDetail = () => {
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
		<S.LetterDetailContainer>
			<S.BackButton onClick={() => window.history.back()}>&larr;</S.BackButton>
			<S.Title>💌작년 1월의 내가 미래의 나에게 보내온 편지💌</S.Title>
			<S.LetterContent id="letter">
				<S.ToText>To. {letterContent.to}</S.ToText>
				<S.BodyText>{letterContent.body}</S.BodyText>
				<S.FromText>from. {letterContent.from}</S.FromText>
			</S.LetterContent>
			<S.DownloadButton onClick={handleDownload}>
				📥 PDF로 다운로드
			</S.DownloadButton>
		</S.LetterDetailContainer>
	);
};

export default LetterDetail;
