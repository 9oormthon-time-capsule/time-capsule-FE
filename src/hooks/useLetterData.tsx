import { useQuery } from '@tanstack/react-query';
import { fetchLetterData } from '../api/directoryLetter';
import { ILetterData } from '../pages/timecapsule/directory/Directory';

export default function useLetterData(pageType: string) {
  const letterQuery = useQuery<ILetterData[], Error>({
    queryKey: ['letterData', pageType],
    queryFn: () => fetchLetterData(pageType),
    initialData: [],
  });

  return {
    letterQuery,
  };
}
