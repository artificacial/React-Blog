import axios from "axios";

const PEXELS_API_KEY =
  "yN56iu5sjvchnJH0T4jln7AiWkQpxgks5owiNq8XCdL22yovGvcUeOMY";
const PEXELS_API_URL = "https://api.pexels.com/v1/search";

export const getPexelsImages = async (query, perPage = 6) => {
  try {
    const response = await axios.get(PEXELS_API_URL, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query,
        per_page: perPage,
      },
    });
    return response.data.photos.map((photo) => photo.src.large2x);
  } catch (error) {
    console.error("Error fetching images from Pexels:", error);
    return [];
  }
};
