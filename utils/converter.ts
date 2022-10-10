import bapackWordData from "./word-data/bapack-word";
import jametWordData from "./word-data/jamet-word";
import wordFetcher from "./word-fetcher";

const converter = (input: string, mode: string) => {
  let response = "";
  let wordData = {};
  if (mode === "1") {
    wordData = bapackWordData;
  }
  if (mode === "2") {
    wordData = jametWordData;
  }
  const words = wordFetcher(input);
  words.forEach((word) => {
    const key = word.toLowerCase();
    if (wordData[key]) {
      const index = Math.floor(Math.random() * wordData[key].length);
      response += `${wordData[key][index]}`;
    }
    if (!wordData[key]) {
      response += `${word}`;
    }
    response += " ";
  });
  return response;
};

export default converter;
