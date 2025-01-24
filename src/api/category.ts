import API from '.';

type CategoryData = {
  categoryName: string;
  textColor: string;
};

type Category = {
  id: string;
  categoryName: string;
  textColor: string;
  createdAt: { seconds: number };
};

export const registerCategory = async (categoryData: CategoryData) => {
  try {
    const response = await API.post(`/todo/category`, categoryData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error registering category:', error);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await API.get(`/todo/category`, {
      withCredentials: true,
    });

    const categories = response.data.map((item: Category) => {
      const date = new Date(item.createdAt.seconds * 1000);

      return {
        id: item.id,
        categoryName: item.categoryName,
        textColor: item.textColor,
        createdAt: date.getTime(),
      };
    });

    const sortedCategories = categories.sort(
      (a: { createdAt: number }, b: { createdAt: number }) =>
        a.createdAt - b.createdAt,
    );

    return sortedCategories;
  } catch (error) {
    console.error('Error fetching category:', error);
    return [];
  }
};

export const modifiedCategory = async (categoryData: CategoryData, categoryId: string) => {
  try {
    const response = await API.patch(`/todo/category/${categoryId}`, categoryData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error modify category:', error);
    throw error;
  }
};

export const deleteCategory = async (categoryId: string) => {
  try {
    const response = await API.delete(`/todo/category/${categoryId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};
