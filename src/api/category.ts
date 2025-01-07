import axios from 'axios';

type CategoryData = {
  categoryName: string;
  color: string;
};

export const registerCategory = async (
  userId: string,
  categoryData: CategoryData,
) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/todo/category/${userId}`,
      categoryData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error registering category:', error);
  }
};

export const fetchCategories = async (userId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/todo/category/${userId}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
  }
};
