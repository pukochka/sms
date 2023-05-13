export function useScroll(stage?: number) {
  const current = stage ?? 0;

  const { top } = document
    .getElementById('stage-' + current)
    ?.getBoundingClientRect() ?? { top: 0 };

  window.scrollTo({
    top: top,
    behavior: 'smooth',
  });
}
