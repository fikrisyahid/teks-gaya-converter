import randomCase from "./random-case";
import wordFetcher from "./word-fetcher";

// Array of common emojis
const commonEmojis: string[] = ["🙏", "😂", "👍", "😎", "🤪"];

const bapackConverter = (input: string): string => {
  let response = "";
  const words = wordFetcher(input);

  words.forEach((word) => {
    let finalWord = word;

    // Check if the word has "nya" and decide whether to replace it or not
    if (finalWord.toLowerCase().includes("nya")) {
      if (Math.random() < 0.5) {
        // 50% chance to replace "nya"
        const nyaChoices = ["x", "X"];
        const nyaChoice =
          nyaChoices[Math.floor(Math.random() * nyaChoices.length)];
        finalWord = finalWord.replace(/nya/gi, nyaChoice);
      }
    }

    // Randomize the case of each letter in the word
    response += randomCase(finalWord);

    // Add random spaces
    const spaceCount = Math.floor(Math.random() * 3) + 1;
    response += " ".repeat(spaceCount);

    // Add a random comma sometimes
    if (Math.random() < 0.2) {
      const commaCount = Math.floor(Math.random() * 4) + 1;
      response += ",".repeat(commaCount);
    }

    // Add a random emoji sometimes
    if (Math.random() < 0.3) {
      const emoji =
        commonEmojis[Math.floor(Math.random() * commonEmojis.length)];
      response += `${emoji} `;
    }
  });

  return response;
};

export default bapackConverter;
