/**
 *
 * @param {Object} row 表格行数据
 * @param {Object} col 表格列数据
 * @param {Object} cellValue 表格单元格数据
 */
export default function transferMoneyToFixed2(row, col, cellValue) {
  if (!cellValue) return "0.00";
  return cellValue.toFixed(2);
}
