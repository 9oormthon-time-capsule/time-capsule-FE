import axios from 'axios';

// 편지 데이터를 가져오는 함수
export const fetchLetterData = async () => {
  try {
    const response = await axios.get(
      'http://localhost:4000/api/timecapsule/letter',
      { withCredentials: true }
    );

    const data = response.data;

    if (data && data.length > 0) {
      const latestLetter = data[0];
      return {
        to: latestLetter.to || '나에게',
        body: latestLetter.content || '편지 내용이 없습니다.',
        from: latestLetter.from || '보낸 사람',
      };
    }

    return { to: '', body: '', from: '' };
  } catch (error) {
    console.error('데이터를 가져오는 데 오류가 발생했습니다:', error);
    throw error;
  }
};

export const fetchLetterCount = async () => {
  try {
    const response = await axios.get(
      'http://localhost:4000/api/timecapsule/letter',
      {
        withCredentials: true,
      },
    );

    return response.data.length;
  } catch (error) {
    console.error('Error fetching letter data:', error);
    throw error;
  }
};

export const submitLetter = async (letter: string) => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/timecapsule/letter', 
      { content: letter },  
      { withCredentials: true }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error submitting letter:', error);
    throw error;
  }
};
