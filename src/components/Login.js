import { validateEmail, checkPasswordStrength } from '../utils/helper.js';

// 登录组件 - 开发中
export default {
  render() {
    console.log('\n=== Login Component (开发中) ===');
    console.log('[✓] 用户名输入框');
    console.log('[✓] 密码输入框');
    console.log('[✓] 登录按钮');
    console.log('[→] 表单验证逻辑已集成');
  },

  // TODO: 这里是关键的验证策略决策点
  // 请实现表单验证逻辑，需要考虑：
  // 1. 用户名是否必须是邮箱格式？
  // 2. 密码强度要求：是否拒绝 weak 密码？
  // 3. 验证失败时的错误提示策略
  validateForm(username, password) {
    const errors = [];

    // 占位实现：基础非空检查
    if (!username || !password) {
      errors.push('用户名和密码不能为空');
      return { valid: false, errors };
    }

    // TODO: 在这里添加你的验证逻辑
    // 参考: validateEmail(username), checkPasswordStrength(password)

    return { valid: true, errors };
  },

  login(username, password) {
    console.log('\n🔐 开始登录流程...');
    const validation = this.validateForm(username, password);

    if (!validation.valid) {
      console.log('❌ 验证失败:', validation.errors);
      return false;
    }

    console.log('✅ 验证通过，模拟 API 调用...');
    console.log(`登录成功: ${username}`);
    return true;
  }
};
