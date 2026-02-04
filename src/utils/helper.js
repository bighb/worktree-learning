export function greet(name) {
  return `Hello, ${name}!`;
}

export function add(a, b) {
  // Hotfix: 添加类型检查，防止传入字符串导致错误拼接
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('add() 只接受数字参数');
  }
  return a + b;
}
