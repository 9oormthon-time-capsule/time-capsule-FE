import API from '.';

export const fetchUserData = async () => {
  try {
    const response = await API.get(`/user`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
