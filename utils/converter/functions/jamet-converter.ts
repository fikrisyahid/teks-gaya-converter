import jametWordData from "../../word-data/jamet-word";
import wordFetcher from "../../word-fetcher";

const jametConverter = (input: string) => {
  let response = "";
  const words = wordFetcher(input);
  words.forEach((word) => {
    const key = word.toLowerCase();

    // Convert per word
    if (jametWordData.words[key]) {
      const index = Math.floor(Math.random() * jametWordData.words[key].length);
      word = jametWordData.words[key][index];
    }

    // Convert per character
    let isNya = false;
    if (word.toLowerCase().includes("nya")) {
      const index = word.toLowerCase().indexOf("nya");
      word = word.slice(0, index);
      isNya = true;
    }
    for (let i = 0; i < word.length; i++) {
      const key = word[i].toLowerCase();
      if (jametWordData.characters[word[i]]) {
        const index = Math.floor(
          Math.random() * jametWordData.characters[key].length
        );
        response += jametWordData.characters[key][index];
        continue;
      }
      response += word[i];
    }
    if (isNya) {
      response += "x";
    }
    response += " ";
  });
  return response;
};

export default jametConverter;
