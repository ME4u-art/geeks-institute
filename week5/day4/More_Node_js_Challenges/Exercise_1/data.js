
export function timeUntilNewYear() {
  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1);


  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  return `The 1st of January is in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
}
