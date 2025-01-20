import API from '.';

interface ILetter {
  createdAt: { seconds: number };
  canReadDate: { seconds: number };
}

// Reflect 데이터 받아오기
export const fetchReflectData = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/timecapsule/reflect', {
      withCredentials: true, // 쿠키와 세션을 함께 보냄
    });
    console.log('Reflect Data:', response.data);  // 데이터 확인용
    return response.data;
  } catch (error) {
    console.error('Error fetching reflect data:', error);
    throw error;
  }
};

export const fetchLetterCount = async () => {
  try {
    const response = await API.get('/timecapsule/letter', {
      withCredentials: true,
    });

    return response.data.length;
  } catch (error) {
    console.error('Error fetching letter data:', error);
    throw error;
  }
};

export const submitLetter = async (letter: string) => {
  try {
    const response = await API.post(
      '/timecapsule/letter',
      { content: letter },
      { withCredentials: true },
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error submitting letter:', error);
    throw error;
  }
};

export const canWriteLetter = async () => {
  try {
    const response = await API.get('/timecapsule/letter', {
      withCredentials: true,
    });

    if (response.data.length === 0) {
      return true;
    }

    const sortedLetters = response.data
      .sort(
        (
          a: { createdAt: { seconds: number } },
          b: { createdAt: { seconds: number } },
        ) => b.createdAt.seconds - a.createdAt.seconds,
      )
      .map((item: ILetter) => new Date(item.createdAt.seconds * 1000));

    const latestLetterDate = sortedLetters[0];
    const latestLetterMonth = latestLetterDate.getMonth();
    const currentMonth = new Date().getMonth();

    if (latestLetterMonth === currentMonth) {
      return false;
    }
    return true;
  } catch (error) {
    console.error('편지 작성 제한 체크 중 오류가 발생했습니다:', error);
    return false;
  }
};

export const canReadLetter = async () => {
  try {
    const response = await API.get('/timecapsule/letter', {
      withCredentials: true,
    });

    const letterData = response.data.map((item: ILetter) => ({
      canReadDate: new Date(item.canReadDate.seconds * 1000),
    }));

    // const now = new Date().getTime();
    const now = new Date('2026-01-01').getTime();

    for (const item of letterData) {
      if (now >= item.canReadDate.getTime()) {
        return true;
      }
    }

    console.log('Cannot read any letters yet.');
    return false;
  } catch (error) {
    console.error('Error fetching letter data:', error);
    throw error;
  }
};
