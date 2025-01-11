import * as S from '../../../styles/timecapsule/write/CustomButton.style';

interface WriteButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  color?: string;
}

export default function WriteButton({
  onClick,
  text,
  color,
}: WriteButtonProps) {
  return (
    <S.Button onClick={onClick} color={color} type="button">
      {text}
    </S.Button>
  );
}
