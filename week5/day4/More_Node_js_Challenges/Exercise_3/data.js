
export function nextHoliday() {
  const now = new Date();
  let holiday = new Date(now.getFullYear(), 11, 25); 

  if (now > holiday) {
    holiday = new Date(now.getFullYear() + 1, 11, 25); 
  }

  const diffMs = holiday - now;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  return `Today is ${now.toDateString()}. The next holiday is Christmas, in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
}
