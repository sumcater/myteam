export default function transferNull(row, col, cellValue) {
  if (cellValue === null) return "--";
  return cellValue;
}
