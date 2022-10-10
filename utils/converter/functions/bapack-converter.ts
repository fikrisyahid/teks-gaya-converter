import bapackWordData from "../../word-data/bapack-word";
import wordFetcher from "../../word-fetcher";

const bapackConverter = (input: string) => {
  let response = "";
  const words = wordFetcher(input);
  words.forEach((word) => {
    const key = word.toLowerCase();
    if (bapackWordData.word[key]) {
      const index = Math.floor(Math.random() * bapackWordData.word[key].length);
      response += bapackWordData.word[key][index];
    }
    if (!bapackWordData.word[key]) {
      response += word;
    }
    response += " ";
  });
  return response;
};

export default bapackConverter;
