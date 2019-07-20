/**
 * @description 通过value值找到label值
 * @author xiaoyang
 * @date 2018-11-08
 * @export
 * @param {*} val
 * @param {*} dict 字典数组
 */
export default function parseDict(val, dict) {
  let temp = "--";
  if (Array.isArray(dict)) {
    dict.forEach(item => {
      if (val * 1 == item.codeValue * 1) {
        temp = item.codeDesc;
      }
    });
  }
  return temp;
}
