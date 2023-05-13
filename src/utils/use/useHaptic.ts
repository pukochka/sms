export default function useHaptic() {
  if (process.env.NODE_ENV === 'development') return;

  window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
}
