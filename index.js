import axios from "axios";
import { resorts } from "./data.js";

const getStatistics = async (resort) => {
  const options = {
    method: "GET",
    url: `https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort/${resort}`,
    headers: {
      "X-RapidAPI-Key": "API KEY",
      "X-RapidAPI-Host": "ski-resorts-and-conditions.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    //  get the coordinates
    console.log(
      response.data.data.name +
        " - " +
        response.data.data.country +
        ", " +
        response.data.data.region
    ); // to get the resort name;
  } catch (error) {
    console.log("from get stats Error");
  }
};

getStatistics("sansicario");
