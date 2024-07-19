export function add(input: string): number {
  if (input === '') return 0;

  const numbers = input.split(',').map(num => parseInt(num, 10));
  return numbers.reduce((sum, current) => sum + current, 0);
}
