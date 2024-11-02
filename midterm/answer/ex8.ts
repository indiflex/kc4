// T extends Function
// T extends (...args: any []) => void
export function debounce<T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
}

export const throttle = <T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    if (timer) return;
    timer = setTimeout(cb, delay, ...args);
  };
};

// function throttle...

const debo = debounce((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) debo(i); // 15 출력

const thro = throttle((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) thro(i); // 11 출력
