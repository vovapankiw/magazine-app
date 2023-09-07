export const debounce = (fn: (query: string) => void, delay: number): ((query: string) => void) => {
  let timerId: NodeJS.Timeout;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
