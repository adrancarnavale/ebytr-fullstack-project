export function getStorage(item: string) {
  return JSON.parse(localStorage.getItem(item) as string);
}
