import axios from "axios"

export const registerCategory = async ( userId, categoryData ) => {
    try {
        const response = await axios.post(
            `http://localhost:4000/api/todo/category/${userId}`,
            categoryData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error("Error registering category:", error);
    }
};