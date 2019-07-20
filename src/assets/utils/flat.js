function flat(menus) {
  let temp = [];
  menus.forEach(item => {
    const children = item.children;
    delete item.children;
    temp.push({
      label: item.resName,
      value: item.resKey
    });
    if (children.length > 0) {
      temp = temp.concat(flat(children));
    }
  });
  return temp;
}

export default flat;
