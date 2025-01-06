import { doc, getDoc } from 'firebase/firestore';
import { database } from '../config/firebaseConfig';

export const fetchUserData = async (userId: string) => {
  try {
    const userRef = doc(database, 'timecapsule', 'user', 'users', userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      return {
        userId: userId,
        nickname: userData.name || '사용자',
        profileImage: userData.profileImage || 'https://via.placeholder.com/150',
      };
    } else {
      console.error('User not found');
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};