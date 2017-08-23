export const getFileName = (str) => {
  const index1 = str.lastIndexOf('.');
  const index2 = str.length;
  return str.substring(index1 + 1, index2);
}
