export function greet(name) {
  return `Hello, ${name}!`;
}

export function add(a, b) {
  return a + b;
}

// 新增：邮箱验证函数（开发中）
export function validateEmail(email) {
  // TODO: 完善正则表达式
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 新增：密码强度检查（开发中）
export function checkPasswordStrength(password) {
  console.log('🔒 检查密码强度...');
  if (password.length < 6) {
    return 'weak';
  }
  if (password.length < 10) {
    return 'medium';
  }
  return 'strong';
}
