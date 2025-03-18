export default function wordFetcher(input: string) {
  const response: string[] = [];
  let temporaryWord = "";

  for (let charIndex = 0; charIndex < input.length; charIndex++) {
    const currentChar = input[charIndex];
    const previousChar = input[charIndex - 1];

    if (currentChar !== " ") {
      temporaryWord += input[charIndex];
    }

    if (
      (currentChar === " " && previousChar !== " " && charIndex !== 0) ||
      charIndex === input.length - 1
    ) {
      response.push(temporaryWord);
      temporaryWord = "";
    }
  }
  return response;
}
