import wordData from "./word-data";
import wordFetcher from "./word-fetcher";

const converter = (input: String) => {
  let response = "";
  const words = wordFetcher(input);
  words.forEach((word) => {
    const key = word.toLowerCase();
    if (wordData[key]) {
      const index = Math.floor(Math.random() * wordData[key].length);
      response += `${wordData[key][index]} `;
    }
    if (!wordData[key]) {
      response += `${word} `;
    }
  });
  return response;
};

export default converter;
