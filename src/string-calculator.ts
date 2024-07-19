export function add(input: string): number {
  if (input === "") return 0;

  let delimiter = /[\n,]/;
  if (input.startsWith("//")) {
    const parts = input.split("\n");
    const delimiterPart = parts[0];
    if (delimiterPart.startsWith("//[") && delimiterPart.endsWith("]")) {
      delimiter = new RegExp(
        delimiterPart.slice(3, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
    } else {
      delimiter = new RegExp(delimiterPart[2]);
    }
    input = parts[1];
  }

  const numbers = input.split(delimiter).map((num) => parseInt(num, 10));
  const negatives = numbers.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  const validNumbers = numbers.filter((num) => num <= 1000);
  return validNumbers.reduce((sum, current) => sum + current, 0);
}
