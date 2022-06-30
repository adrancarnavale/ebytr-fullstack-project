export function setStorage(item: string, data: unknown) {
  localStorage.setItem(item, JSON.stringify(data));
}
