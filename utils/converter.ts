import wordData from "./word-data";
import wordFetcher from "./word-fetcher";

const converter = (input: String) => {
  let response = '';
  const words = wordFetcher(input);
  words.forEach((word) => {
    if (wordData[word]) {
      const index = Math.floor(Math.random() * wordData[word].length);
      response += `${wordData[word][index]} `;
    }
    if (!wordData[word]) {
      response += `${word} `;
    }
  });
  return response;
}
 
export default converter;