export const smoothScrollTo = (targetId: string, offset = 75, duration = 650) => {
  if (typeof window === "undefined") return;

  const id = targetId.startsWith("#") ? targetId.slice(1) : targetId;
  const element = document.getElementById(id);
  if (!element) return;

  const startPosition =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  const elementPosition = element.getBoundingClientRect().top;
  const targetPosition = Math.max(0, startPosition + elementPosition - offset);
  const distance = targetPosition - startPosition;

  if (Math.abs(distance) < 2) return;

  // Cubic ease-in-out curve for a natural, smooth gliding effect
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  let startTime: number | null = null;
  let animationFrameId: number;

  const cancelScroll = () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("wheel", cancelScroll);
    window.removeEventListener("touchmove", cancelScroll);
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      animationFrameId = requestAnimationFrame(animation);
    } else {
      cancelScroll();
    }
  };

  window.addEventListener("wheel", cancelScroll, { passive: true });
  window.addEventListener("touchmove", cancelScroll, { passive: true });

  animationFrameId = requestAnimationFrame(animation);
};
