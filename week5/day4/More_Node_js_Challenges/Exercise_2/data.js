
export function minutesLived(birthdateString) {
  const birthdate = new Date(birthdateString);
  const now = new Date();

  const diffMs = now - birthdate;
  const minutes = Math.floor(diffMs / (1000 * 60));

  return `You have lived approximately ${minutes.toLocaleString()} minutes.`;
}

