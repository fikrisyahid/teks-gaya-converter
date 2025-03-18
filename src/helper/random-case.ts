export default function randomCase(word: string): string {
  let result = "";
  for (const char of word) {
    result += Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();
  }
  return result;
}
