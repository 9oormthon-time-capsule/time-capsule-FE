import { useQuery } from '@tanstack/react-query';
import { fetchUserData } from '../api/user';

export default function useUser() {
  const userDataQuery = useQuery({
    queryKey: ['userData'],
    queryFn: fetchUserData,
  });

  return {
    userDataQuery,
  };
}
