export const fetchUserData = async (userId: string) => {
  try {
    const response = await fetch(`http://localhost:4000/api/user/${userId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};