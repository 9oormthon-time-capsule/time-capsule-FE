import axios from "axios";

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/api/user`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};