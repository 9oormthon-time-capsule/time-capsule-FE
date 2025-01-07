import axios from 'axios';

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
