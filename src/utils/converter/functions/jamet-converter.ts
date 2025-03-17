import wordFetcher from "../../word-fetcher"; // Ini asumsi lokasi file, sesuaikan ya

// Function to randomize the case of each letter in the word
const randomCase = (word: string): string => {
  let result = "";
  for (const char of word) {
    result += Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();
  }
  return result;
};

const characterSubstitutions: { [key: string]: string[] } = {
  a: ["4", "@"],
  b: ["13"],
  c: ["<", "("],
  d: ["|)", "[)"],
  e: ["3"],
  f: ["|=", "ph"],
  g: ["9", "6"],
  h: ["#"],
  i: ["1", "!"],
  j: ["_|"],
  k: ["|<"],
  l: ["1", "|_"],
  m: ["111", "/\\/\\"],
  n: ["/\\/"],
  o: ["0"],
  p: ["|°"],
  q: ["9", "0,"],
  r: ["12"],
  s: ["5", "$"],
  t: ["7", "+"],
  u: ["!_!", "1_1", "|_|"],
  v: ["\\/"],
  w: ["\\/\\/"],
  x: ["><"],
  y: ["`/", "¥"],
  z: ["2"],
};

const jametConverter = (input: string): string => {
  let response = "";
  const words = wordFetcher(input);

  words.forEach((word) => {
    // Randomize the case of each letter in the original word
    const randomizedWord = randomCase(word);
    let finalWord = "";

    for (let i = 0; i < randomizedWord.length; i++) {
      const char = randomizedWord[i].toLowerCase();
      if (characterSubstitutions[char] && Math.random() < 0.8) {
        // 80% chance
        const index = Math.floor(
          Math.random() * characterSubstitutions[char].length
        );
        finalWord += characterSubstitutions[char][index];
      } else {
        finalWord += randomizedWord[i];
      }
    }

    // Add a space after each word
    response += finalWord + " ";
  });

  return response;
};

export default jametConverter;
