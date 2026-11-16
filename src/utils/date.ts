export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

// Wedding Target Date: 17 December 2026 at 5:40 PM IST (UTC+05:30)
export const WEDDING_DATE_ISO = '2026-12-17T17:40:00+05:30';

export function calculateTimeRemaining(): TimeRemaining {
  const target = new Date(WEDDING_DATE_ISO).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPast: true,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    isPast: false,
  };
}

export function formatWeddingDate(): string {
  return '17 December 2026';
}

export function formatCeremonyTime(): string {
  return '5:40 PM';
}
