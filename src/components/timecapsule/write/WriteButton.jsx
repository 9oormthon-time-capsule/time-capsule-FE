import * as S from '../../../styles/timecapsule/write/CustomBox.style';

export default function WriteButton({ onClick, text, color }) {
	return (
		<S.Button onClick={onClick} color={color}>
			{text}
		</S.Button>
	);
}
