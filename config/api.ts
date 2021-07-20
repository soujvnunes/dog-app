import { THE_DOG_APP_X_API_KEY } from "@env";
import axios from "axios";

export default {
  async getBreed() {
    try {
      const response = await axios.get(
        "https://api.thedogapi.com/v1/breeds?limit=10&page=1&order=ASCE",
        {
          "x-api-key": THE_DOG_APP_X_API_KEY,
        },
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
