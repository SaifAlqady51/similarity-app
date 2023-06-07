import string from "string-similarity";
// this method comparing two strings literally
export const comparing = (text1: string, text2: string) => {
  const result = string.compareTwoStrings(text1, text2);
  return result;
};
