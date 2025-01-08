import axios from 'axios';

export const submitReflect = async (reflect: string, emoji: string) => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/timecapsule/reflect',
      { content: reflect, emoji },
      { withCredentials: true },
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error submitting reflect:', error);
    throw error;
  }
};
