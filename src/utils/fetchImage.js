import axios from "axios";

const UNSPLASH_ACCESS_KEY = "9BCRQROxhAMIgCIDVX8JVVLMAZYMNZRmV7Lbovp-CGc";

export const fetchImageForTask = async (query) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}&orientation=landscape`
    );
    return response.data.urls.small;
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error);
    return null;
  }
};
