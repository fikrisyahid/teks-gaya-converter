const wordFetcher = (input: String) => {
  const response: string[] = [];
  let tempStr = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      tempStr += input[i];
    }
    if (
      (input[i] === " " && input[i - 1] !== " " && i !== 0) ||
      i === input.length - 1
    ) {
      response.push(tempStr);
      tempStr = "";
    }
  }
  return response;
};

export default wordFetcher;
