import axios from 'axios';

type CategoryData = {
  categoryName: string;
  textColor: string;
};

export const registerCategory = async (
  categoryData: CategoryData,
) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/todo/category`,
      categoryData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error registering category:', error);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/todo/category`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
  }
};

export const deleteCategory = async (categoryId: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/todo/category/${categoryId}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};