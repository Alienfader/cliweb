// src/utils/api_commands.ts
import axios from 'axios';
import config from '../../config.json';

export const getProjects = async (): Promise<any> => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`
  );
  return data;
};

export const getReadme = async (): Promise<any> => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string): Promise<string> => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return 'Error fetching weather';
  }
};

export interface QuoteResponse {
  quote?: string;
  author?: string;
}

export const getQuote = async (): Promise<{ quote: string }> => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    console.log('Quote API response:', response.data);

    // Check if the API response has a nested data object
    const data = response.data;
    let quoteText: string | undefined;
    let author: string | undefined;

    if (data.data) {
      quoteText = data.data.quote;
      author = data.data.author;
    } else {
      quoteText = data.quote;
      author = data.author;
    }

    return {
      quote: `${quoteText || 'No quote found'}\n  - ${author || 'Unknown'}`
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
    return {
      quote: 'Could not fetch quote at this time.'
    };
  }
};
