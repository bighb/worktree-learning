import { greet, checkPasswordStrength } from './utils/helper.js';
import Header from './components/Header.js';
import Login from './components/Login.js';

console.log('App Version: 1.0.0 (feature/user-login 开发中)');
console.log(greet('Worktree Learning'));
Header.render();

// 登录功能开发中
Login.render();
console.log('\n测试密码强度:', checkPasswordStrength('test123'));

// 测试登录流程
console.log('\n--- 测试登录功能 ---');
Login.login('user@example.com', 'test123');
