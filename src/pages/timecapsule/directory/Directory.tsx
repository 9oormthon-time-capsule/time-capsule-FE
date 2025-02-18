import MainLayout from '../../../layout/MainLayout';
import CapsuleContainer from '../../../components/timecapsule/directory/Capsules';
import { fetchLetterData } from '../../../api/directoryLetter';
import Header from '../../../components/common/Header';
import { useQuery } from '@tanstack/react-query';

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
  const { data: letterData, isLoading } = useQuery<
    unknown,
    Error,
    ILetterData[]
  >({
    queryKey: ['letterData', pageType],
    queryFn: async () => await fetchLetterData(pageType),
    initialData: [],
  });

  return (
    <MainLayout>
      <Header pageType={pageType} />
      <CapsuleContainer
        isLoading={isLoading}
        letterData={letterData}
        pageType={pageType}
      />
    </MainLayout>
  );
};

export default Directory;
