export function normalizeRuntime(runtime: number) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  if (hours === 0) return `${minutes} минут`;
  if (minutes === 0) return `${hours} час`;
  if (minutes === 1) return `${hours} час ${minutes} минута`;
  if (hours === 1) return `${hours} час ${minutes} минут`;
  return `${hours} часа ${minutes} минут`;
}
