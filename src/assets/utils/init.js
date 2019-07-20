//判断是否有菜单或者按钮权限
export const hasMenuAndButton = (type) => {
    return myApp.$store.state.menuAndButton.some(n => n.value === type.toString())
}
//从字典中取值 不能用find 可能不止一个匹配值
export const hasDictsType = (type) => {
    const dicts = JSON.parse(sessionStorage.getItem("dicts"));
    return dicts.filter(n => n.codeSet === type.toString())
}