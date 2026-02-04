import { add } from '../src/utils/helper.js';

console.log('Running tests...');
console.log('Test add(1, 2):', add(1, 2) === 3 ? 'PASS' : 'FAIL');

// Hotfix 测试：验证类型检查
console.log('\n测试类型检查:');
try {
  add('1', '2');
  console.log('Test add("1", "2"): FAIL (应该抛出错误)');
} catch (e) {
  console.log('Test add("1", "2"): PASS (正确抛出错误)');
}
