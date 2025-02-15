import { useEffect, useState } from 'react';
import MainLayout from '../../../layout/MainLayout';
import CapsuleContainer from '../../../components/timecapsule/directory/Capsules';
import { fetchLetterData } from '../../../api/directoryLetter';
import Header from '../../../components/common/Header';

interface IDirectory {
  pageType: string;
}

const Directory = ({ pageType }: IDirectory) => {
  const [letterData, setLetterData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchLetterData(pageType);
      setLetterData(data);
    };
    loadData();
  }, [pageType]);

  return (
    <MainLayout>
      <Header pageType={pageType} />
      <CapsuleContainer letterData={letterData} pageType={pageType} />
    </MainLayout>
  );
};

export default Directory;
