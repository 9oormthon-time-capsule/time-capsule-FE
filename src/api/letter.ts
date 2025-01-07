import axios from "axios";

export const fetchLetterCount = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/timecapsule/letter", {
      withCredentials: true,
    });

    return response.data.length;
  } catch (error) {
    console.error("Error fetching letter data:", error);
    throw error;
  }
};