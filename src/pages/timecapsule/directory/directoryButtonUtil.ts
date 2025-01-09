import { useNavigate } from 'react-router-dom';

interface IDirectoryButton {
  directoryState: { pageType: string; buttonLabel: string };
  navigate: ReturnType<typeof useNavigate>;
  setDirectoryState: React.Dispatch<
    React.SetStateAction<{ pageType: string; buttonLabel: string }>
  >;
}

export const handleDirectoryButton = (
  directoryState: IDirectoryButton['directoryState'],
  setDirectoryState: IDirectoryButton['setDirectoryState'],
) => {
  const newPageType =
    directoryState.pageType === '타임캡슐' ? '일일회고' : '타임캡슐';

  const newButtonLabel =
    directoryState.pageType === '타임캡슐'
      ? '타임캡슐 보러가기'
      : '일일회고 보러가기';

  setDirectoryState((prev) => ({
    ...prev,
    pageType: newPageType,
    buttonLabel: newButtonLabel,
  }));

  return newPageType;
};

export const handleButtonClick = (
  directoryState: IDirectoryButton['directoryState'],
  setDirectoryState: IDirectoryButton['setDirectoryState'],
  navigate: IDirectoryButton['navigate'],
) => {
  const newPageType = handleDirectoryButton(directoryState, setDirectoryState);
  navigate(`/directory/${newPageType === '타임캡슐' ? 'letter' : 'reflect'}`);
};
