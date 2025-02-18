import MainLayout from '../../../layout/MainLayout';
import CapsuleContainer from '../../../components/timecapsule/directory/Capsules';
import Header from '../../../components/common/Header';
import useLetterData from '../../../hooks/useLetterData';

interface IDirectory {
  pageType: string;
}

export interface ILetterData {
  id: number;
  content: string;
  createdAt: string;
  emoji: string;
}

const Directory = ({ pageType }: IDirectory) => {
  const { letterQuery } = useLetterData(pageType);

  return (
    <MainLayout>
      <Header pageType={pageType} />
      <CapsuleContainer
        isLoading={letterQuery.isLoading}
        letterData={letterQuery.data}
        pageType={pageType}
      />
    </MainLayout>
  );
};

export default Directory;
