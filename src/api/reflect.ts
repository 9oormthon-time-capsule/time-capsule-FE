import API from '.';

export const submitReflect = async (reflect: string, emoji: string) => {
  try {
    const response = await API.post(
      '/timecapsule/reflect',
      { content: reflect, emoji },
      { withCredentials: true },
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error submitting reflect:', error);
    throw error;
  }
};

// Reflect 데이터 받아오기
export const fetchReflectData = async () => {
  try {
    const response = await API.get('/timecapsule/reflect', {
      withCredentials: true, // 쿠키와 세션을 함께 보냄
    });
    console.log('Reflect Data:', response.data); // 데이터 확인용
    return response.data;
  } catch (error) {
    console.error('Error fetching reflect data:', error);
    throw error;
  }
};
