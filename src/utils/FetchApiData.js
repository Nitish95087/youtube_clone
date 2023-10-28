import axios from "axios";

const BASE_URL = 'https://youtube-v311.p.rapidapi.com';

const options = {
  params: {
    maxResults: '5',
  },
  headers: {
    'X-RapidAPI-Key':'fb19bf4d4cmsh2d785fc1cf93368p14788ajsnb2291c1b4881',
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url)=>{
    const response = await axios.get(`${BASE_URL}/${url}`, options);

    return response.data;
}