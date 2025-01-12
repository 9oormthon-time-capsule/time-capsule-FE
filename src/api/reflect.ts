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
