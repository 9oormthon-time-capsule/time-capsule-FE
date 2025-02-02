import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as S from '../../../styles/timecapsule/detail/LetterDetail.style';

import { StarsBackground } from '../../../components/timecapsule/write/StarsBackground';

import { fetchLetterCount } from '../../../api/letter';

const LetterDetail = () => {
	const location = useLocation();
	
	const { letterId } = useParams();
	const [letterContent, setLetterContent] = useState(null);

	useEffect(() => {
		const getLetterContent = async () => {
		  try {
			const content = await fetchLetterContent(letterId);
			console.log('Fetched Letter Content:', content);
			setLetterContent(content);
		  } catch (error) {
			console.error('Error fetching letter content:', error);
		  }
		};
		
		getLetterContent();
	  }, [letterId]);

	const handleDownload = () => {
		const input = document.getElementById('letter');
		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF();
			pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
			pdf.save('letter-detail.pdf');
		});
	};

	if (!letterContent) return <div>Loading...</div>;

	return (
		<S.LetterDetailContainer>
			<StarsBackground />

			<S.BackButton onClick={() => window.history.back()}>
				&larr;
			</S.BackButton>

			<S.Title>
				💌작년 1월의 내가 미래의 나에게 보내온 편지💌
			</S.Title>

			<S.LetterContent id="letter">
				<S.BodyText>{letterContent.body}</S.BodyText>
			</S.LetterContent>

			<S.DownloadButton onClick={handleDownload}>
				📥 PDF로 다운로드
			</S.DownloadButton>
		</S.LetterDetailContainer>
	);
};

export default LetterDetail;
