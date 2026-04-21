export function camelCase(input: string): string {
  const words = input.split(/[\s_-]+/).filter((word) => word.length > 0);
  const [firstWord, ...restWords] = words;

  if (firstWord === undefined) {
    return "";
  }

  return (
    firstWord.toLowerCase() +
    restWords
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      )
      .join("")
  );
}
