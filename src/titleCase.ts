export function titleCase(input: string): string {
  return input
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => {
      const normalizedWord = word.toLowerCase();
      const firstLetterIndex = normalizedWord.search(/\p{L}/u);

      if (firstLetterIndex === -1) {
        return normalizedWord;
      }

      return (
        normalizedWord.slice(0, firstLetterIndex) +
        normalizedWord.charAt(firstLetterIndex).toUpperCase() +
        normalizedWord.slice(firstLetterIndex + 1)
      );
    })
    .join(" ");
}
