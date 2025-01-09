import axios from 'axios';

interface ILetterData {
  id: number;
  content: string;
  createdAt: { seconds: number };
}

export const fetchLetterData = async (pageType: string) => {
  try {
    const apiUrl =
      pageType === '일일회고'
        ? 'http://localhost:4000/api/timecapsule/reflect'
        : 'http://localhost:4000/api/timecapsule/letter';

    const response = await axios.get(apiUrl, {
      withCredentials: true,
    });

    const formattedData = response.data.map((item: ILetterData) => {
      const date = new Date(item.createdAt.seconds * 1000);
      let formattedDate: string = '';

      if (pageType === '타임캡슐') {
        const options: Intl.DateTimeFormatOptions = { month: 'long' };
        formattedDate = new Intl.DateTimeFormat('ko-KR', options).format(date);
      } else if (pageType === '일일회고') {
        const options: Intl.DateTimeFormatOptions = {
          month: 'long',
          day: 'numeric',
        };

        formattedDate = new Intl.DateTimeFormat('ko-KR', options).format(date);
      }

      return {
        id: item.id,
        content: item.content,
        createdAt: formattedDate,
      };
    });

    return formattedData;
  } catch (error) {
    console.error('데이터를 가져오는 데 오류가 발생했습니다:', error);
    return [];
  }
};
