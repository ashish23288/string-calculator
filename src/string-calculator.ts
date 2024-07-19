export function add(input: string): number {
  if (input === '') return 0;

  let delimiter = /[\n,]/;
  if (input.startsWith('//')) {
    const parts = input.split('\n');
    delimiter = new RegExp(parts[0][2]);
    input = parts[1];
  }

  const numbers = input.split(delimiter).map(num => parseInt(num, 10));
  return numbers.reduce((sum, current) => sum + current, 0);
}
