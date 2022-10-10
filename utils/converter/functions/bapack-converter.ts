import bapackWordData from "../../word-data/bapack-word";
import wordFetcher from "../../word-fetcher";

const bapackConverter = (input: string) => {
  let response = "";
  const words = wordFetcher(input);
  words.forEach((word) => {
    const key = word.toLowerCase();
    if (bapackWordData.words[key]) {
      const index = Math.floor(Math.random() * bapackWordData.words[key].length);
      response += bapackWordData.words[key][index];
    }
    if (!bapackWordData.words[key]) {
      response += word;
    }
    response += " ";
  });
  return response;
};

export default bapackConverter;
