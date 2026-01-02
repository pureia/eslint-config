/**
 * JavaScript ESLint 规则测试文件
 *
 * 本文件包含所有JavaScript规则的测试用例，用于验证每个规则的配置是否合理
 *
 * 使用方法：
 * 1. 运行 eslint 检查此文件：eslint test/javascript-rules.test.js
 * 2. 查看错误和警告，判断规则是否需要开启或关闭
 * 3. 根据实际需求调整 src/configs/javascript.ts 中的规则配置
 */

// ============================================================================
// Possible Errors - 可能的错误
// ============================================================================

// no-console - 禁用 console（当前：off）
// console.log('This will not trigger error because rule is off');
// console.error('Error message');
// console.warn('Warning message');

// no-debugger - 禁用 debugger 语句（当前：error）
// debugger; // ❌ ERROR: Unexpected 'debugger' statement

// no-alert - 禁用 alert（当前：warn）
// alert('Hello'); // ⚠️ WARN: Unexpected alert

// no-constant-condition - 禁用常量条件表达式（当前：warn，循环中除外）
// if (true) { // ⚠️ WARN: Unexpected constant condition
//   console.log('always true');
// }
// while (false) { // ⚠️ WARN: Unexpected constant condition
//   console.log('never runs');
// }
// for (let i = 0; true; i++) { // ✅ OK: checkLoops: false
//   if (i > 5) break;
// }

// no-constant-binary-expression - 禁止常量二元表达式（当前：error）
// const result = 1 + 2; // ❌ ERROR: Unexpected constant binary expression

// for-direction - 检查 for-in 循环的方向（当前：error）
// for (let i = 0; i < 10; i--) { // ❌ ERROR: The update clause in this loop moves the variable in the wrong direction
//   console.log(i);
// }

// no-async-promise-executor - 禁止在 Promise executor 函数中使用 async（当前：error）
// new Promise(async () => {}); // ❌ ERROR: Promise executor functions should not be async

// no-await-in-loop - 禁止在循环中使用 await（当前：warn）
// async function test() {
//   for (const item of items) {
//     await processItem(item); // ⚠️ WARN: Unexpected await in a loop
//   }
// }

// no-cond-assign - 禁止在条件语句中使用赋值（当前：error）
// let x;
// if (x = 5) { // ❌ ERROR: Expected a conditional expression and instead saw an assignment
//   console.log(x);
// }

// no-control-regex - 禁止正则表达式中的控制字符（当前：error）
// const pattern = /\x1f/; // ❌ ERROR: Unexpected control character(s) in regular expression

// no-dupe-else-if - 禁止重复的 else-if 条件（当前：error）
// if (x === 1) {
// } else if (x === 1) { // ❌ ERROR: This branch can never execute
// }

// no-empty-character-class - 禁止正则表达式中的空字符类（当前：error）
// const pattern = /^abc[]/; // ❌ ERROR: Empty character class

// no-extra-parens - 禁止不必要的括号（当前：off）
// const result = ((1 + 2)); // ✅ OK: rule is off

// no-extra-semi - 禁止多余的分号（当前：error）
// const x = 5;; // ❌ ERROR: Unnecessary semicolon

// no-dupe-args - 禁止函数参数重复（当前：error）
// function test(a, a) { // ❌ ERROR: Duplicate param 'a'
// }

// no-dupe-keys - 禁止对象字面量中重复的键（当前：error）
// const obj = { a: 1, a: 2 }; // ❌ ERROR: Duplicate key 'a'

// no-duplicate-case - 禁止 switch 语句中重复的 case（当前：error）
// switch (x) {
//   case 1:
//     break;
//   case 1: // ❌ ERROR: Duplicate case
//     break;
// }

// no-empty - 禁止空语句块（当前：warn，catch 除外）
// function test() { // ⚠️ WARN: Empty block statement
// }
// try {
//   throw new Error();
// } catch (e) { // ✅ OK: allowEmptyCatch: true
// }

// no-ex-assign - 禁止重新分配异常参数（当前：error）
// try {
//   throw new Error();
// } catch (e) {
//   e = new Error(); // ❌ ERROR: Do not assign to the exception parameter
// }

// no-extra-boolean-cast - 禁止不必要的布尔类型转换（当前：error）
// const x = !!true; // ❌ ERROR: Redundant double negation

// no-func-assign - 禁止重新分配函数声明（当前：error）
// function test() {}
// test = function() {}; // ❌ ERROR: 'test' is a function

// no-inner-declarations - 禁止在嵌套块中声明函数（当前：error）
// if (true) {
//   function test() {} // ❌ ERROR: Move function declaration to top of function scope
// }

// no-invalid-regexp - 禁止无效的正则表达式字符串（当前：error）
// const pattern = new RegExp('('); // ❌ ERROR: Invalid regular expression

// no-irregular-whitespace - 禁止不规则的空白字符（当前：error）
// const x = 1; // ❌ ERROR: Irregular whitespace not allowed

// no-obj-calls - 禁止将全局对象作为函数调用（当前：error）
// const math = Math(); // ❌ ERROR: 'Math' is not a function

// no-prototype-builtins - 禁止直接调用 Object.prototype 方法（当前：error）
// const obj = {};
// const hasOwn = obj.hasOwnProperty('key'); // ❌ ERROR: Do not access Object.prototype method 'hasOwnProperty' from target object
// ✅ Correct: Object.prototype.hasOwnProperty.call(obj, 'key');

// no-regex-spaces - 禁止正则表达式中的多个空格（当前：error）
// const pattern = /foo   bar/; // ❌ ERROR: Multiple spaces found in regular expression

// no-sparse-arrays - 禁止稀疏数组（当前：error）
// const arr = [1, , 2]; // ❌ ERROR: Unexpected sparse array

// no-compare-neg-zero - 禁止与 -0 比较（当前：error）
// const x = -0;
// if (x === -0) { // ❌ ERROR: Do not compare against -0
// }

// no-loss-of-precision - 禁止因精度丢失的数字字面量（当前：error）
// const x = 9007199254740993; // ❌ ERROR: Loss of precision

// no-new-native-nonconstructor - 禁止对非构造函数使用 new（当前：error）
// const symbol = new Symbol('test'); // ❌ ERROR: Symbol is not a constructor

// no-promise-executor-return - 禁止在 Promise executor 函数中返回值（当前：error）
// new Promise((resolve) => { return; }); // ❌ ERROR: Return statement is allowed only inside a function

// no-setter-return - 禁止 setter 函数返回值（当前：error）
// const obj = {
//   set x(value) {
//     return value; // ❌ ERROR: Setters cannot return values
//   }
// };

// no-template-curly-in-string - 禁止在字符串中使用模板字面量占位符（当前：error）
// const str = 'Hello ${name}'; // ❌ ERROR: Unexpected template string expression

// no-unexpected-multiline - 禁止令人困惑的多行表达式（当前：error）
// const x = 1
// [1, 2, 3].forEach(n => console.log(n)); // ❌ ERROR: Unexpected newline between object and [...]

// no-unreachable - 禁止无法到达的代码（当前：error）
// function test() {
//   return;
//   console.log('unreachable'); // ❌ ERROR: Unreachable code
// }

// no-unreachable-loop - 禁止无法到达的循环（当前：error）
// function test() {
//   return;
//   for (let i = 0; i < 10; i++) { // ❌ ERROR: Unreachable loop
//   }
// }

// no-unsafe-finally - 禁止 finally 块中的控制流语句（当前：error）
// try {
//   return 1;
// } finally {
//   return 2; // ❌ ERROR: Unsafe usage of ReturnStatement
// }

// no-unsafe-negation - 禁止关系运算符的否定操作符位置不正确（当前：error）
// if (!x === 1) { // ❌ ERROR: Negating the left operand of the in operator
// }

// use-isnan - 要求使用 isNaN() 检查 NaN（当前：error）
// if (x === NaN) { // ❌ ERROR: Use the isNaN function to compare with NaN
// }
// ✅ Correct: if (isNaN(x)) {}

// valid-typeof - 强制 typeof 表达式与有效字符串比较（当前：error）
// if (typeof x === 'strnig') { // ❌ ERROR: Invalid typeof comparison value
// }

// ============================================================================
// Best Practices - 最佳实践
// ============================================================================

// accessor-pairs - 强制 getter/setter 成对出现（当前：error）
// const obj = {
//   get x() { return this._x; },
//   // ❌ ERROR: Getter is not paired with a setter
// };

// array-callback-return - 强制数组方法的回调函数有返回值（当前：error）
// [1, 2, 3].map(n => { // ❌ ERROR: Array.prototype.map() expects a return value from callback function
//   console.log(n);
// });

// block-scoped-var - 强制变量在块作用域内使用（当前：error）
// for (var i = 0; i < 10; i++) {}
// console.log(i); // ❌ ERROR: 'i' used outside of binding context

// class-methods-use-this - 强制类方法使用 this（当前：error）
// class Test {
//   method() { // ❌ ERROR: Class method 'method' does not use 'this'
//     console.log('test');
//   }
// }

// complexity - 强制代码复杂度不超过 20（当前：error）
// function test(a, b, c, d, e, f, g, h, i, j) {
//   if (a) {
//     if (b) {
//       if (c) {
//         if (d) {
//           if (e) {
//             if (f) {
//               if (g) {
//                 if (h) {
//                   if (i) {
//                     if (j) {
//                       console.log('complex');
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// consistent-return - 强制 return 语句始终返回或不返回（当前：error）
// function test(x) {
//   if (x) {
//     return 1;
//   }
//   // ❌ ERROR: Expected to return a value at the end of function
// }

// curly - 强制多行语句使用大括号（当前：multi-line）
// if (true)
//   console.log('test'); // ❌ ERROR: Expected { after 'if' condition

// default-case - 强制 switch 语句有 default 分支（当前：warn）
// switch (x) {
//   case 1:
//     break;
//   // ⚠️ WARN: Expected a default case
// }

// default-case-last - 强制 default 分支在 switch 语句的最后（当前：error）
// switch (x) {
//   default: // ❌ ERROR: Default clause should be the last clause
//     break;
//   case 1:
//     break;
// }

// default-param-last - 强制默认参数在最后（当前：error）
// function test(x = 1, y) { // ❌ ERROR: Default parameters should be last
// }

// dot-location - 强制点号在属性名称之前（当前：property）
// const obj = {};
// const x = obj. // ❌ ERROR: Expected dot to be on same line as property
//   prop;

// dot-notation - 强制使用点号表示法访问属性（当前：error）
// const obj = {};
// const x = obj['prop']; // ❌ ERROR: ["prop"] is better written in dot notation

// eqeqeq - 强制使用 === 和 !==（当前：error）
// if (x == 1) { // ❌ ERROR: Expected '===' and instead saw '=='
// }

// grouped-accessor-pairs - 强制 getter/setter 分组在一起（当前：error）
// const obj = {
//   get x() { return this._x; },
//   y: 1,
//   set x(value) { this._x = value; } // ❌ ERROR: Accessor properties should be grouped
// };

// guard-for-in - 强制 for-in 循环中包含 if 语句（当前：warn）
// for (const key in obj) { // ⚠️ WARN: The body of a for-in should be wrapped in an if statement
//   console.log(key);
// }

// max-classes-per-file - 强制每个文件最多 1 个类（当前：warn）
// class Test1 {}
// class Test2 {} // ⚠️ WARN: Maximum number of classes per file exceeded

// no-caller - 禁用 arguments.caller 和 arguments.callee（当前：error）
// function test() {
//   arguments.callee; // ❌ ERROR: Avoid arguments.callee
// }

// no-case-declarations - 禁止在 case 子句中声明变量（当前：error）
// switch (x) {
//   case 1:
//     const y = 1; // ❌ ERROR: Unexpected lexical declaration in case block
// }

// no-constructor-return - 禁止在构造函数中返回值（当前：error）
// class Test {
//   constructor() {
//     return {}; // ❌ ERROR: Unexpected return statement in constructor
//   }
// }

// no-div-regex - 禁止看起来像除法的正则表达式（当前：warn）
// const pattern = /=foo/; // ⚠️ WARN: A regular expression literal can be confused with '/='

// no-else-return - 禁止在 if 语句中的 return 后使用 else（当前：error）
// function test(x) {
//   if (x) {
//     return 1;
//   } else { // ❌ ERROR: Unnecessary 'else' after 'return'
//     return 2;
//   }
// }

// no-empty-function - 禁止空函数（当前：warn）
// function test() {} // ⚠️ WARN: Unexpected empty function

// no-empty-pattern - 禁止空的解构模式（当前：error）
// const {} = obj; // ❌ ERROR: Unexpected empty destructuring pattern

// no-eq-null - 禁止与 null 进行比较（当前：error）
// if (x == null) { // ❌ ERROR: Use '===' to compare with null
// }

// no-eval - 禁用 eval()（当前：error）
// eval('console.log("test")'); // ❌ ERROR: eval can be harmful

// no-extend-native - 禁止扩展原生对象（当前：error）
// Array.prototype.test = function() {}; // ❌ ERROR: Do not extend native prototypes

// no-extra-bind - 禁止不必要的 bind()（当前：error）
// function test() {
//   console.log(this);
// }
// test.bind(this)(); // ❌ ERROR: The function binding is unnecessary

// no-extra-label - 禁止不必要的标签（当前：error）
// loop: while (true) { // ❌ ERROR: Unused label
//   break;
// }

// no-fallthrough - 禁止 switch 语句中的 fallthrough（当前：error）
// switch (x) {
//   case 1:
//     console.log(1);
//   case 2: // ❌ ERROR: Expected a 'break' statement before 'case'
//     console.log(2);
// }

// no-floating-decimal - 禁止浮点小数（当前：error）
// const x = .5; // ❌ ERROR: A leading decimal point can be confused with a dot

// no-global-assign - 禁止赋值给全局变量（当前：error）
// window = {}; // ❌ ERROR: Do not assign to read-only global variables

// no-implicit-coercion - 禁止隐式类型转换（当前：error）
// const x = '5'; // ❌ ERROR: Unexpected implicit coercion
// const y = +x; // ❌ ERROR: Unexpected implicit coercion
// const z = x - 0; // ❌ ERROR: Unexpected implicit coercion

// no-implied-eval - 禁止类似 eval 的方法（当前：error）
// setTimeout('console.log("test")', 100); // ❌ ERROR: Implied eval. Consider passing a function instead of a string

// no-invalid-this - 禁止在类之外使用 this（当前：warn）
// function test() { // ⚠️ WARN: Unexpected 'this'
//   console.log(this);
// }

// no-iterator - 禁用 __iterator__ 属性（当前：error）
// const obj = {};
// obj.__iterator__ = function() {}; // ❌ ERROR: __iterator__ is a deprecated property

// no-labels - 禁用标签语句（当前：error）
// loop: for (let i = 0; i < 10; i++) { // ❌ ERROR: Label 'loop' is defined but never used
//   if (i === 5) break loop;
// }

// no-lone-blocks - 禁止不必要的嵌套块（当前：error）
// {
//   const x = 1; // ❌ ERROR: Block is nested inside another block
// }

// no-loop-func - 禁止在循环中声明函数（当前：error）
// for (let i = 0; i < 10; i++) {
//   function test() { // ❌ ERROR: Function declared in a loop contains unsafe references to variable(s) 'i'
//     console.log(i);
//   }
// }

// no-magic-numbers - 禁止魔术数字（当前：off）
// const x = 42; // ✅ OK: rule is off

// no-multi-spaces - 禁止多个空格（当前：error）
// const x  =  1; // ❌ ERROR: Multiple spaces found before '='

// no-multi-str - 禁止多行字符串（当前：error）
// const str = 'line1\
// line2'; // ❌ ERROR: Multiline support is limited

// no-new - 禁止使用 new 而不赋值（当前：error）
// new Date(); // ❌ ERROR: Do not use 'new' for side effects

// no-new-func - 禁止使用 new Function（当前：error）
// const fn = new Function('x', 'return x'); // ❌ ERROR: The Function constructor is eval

// no-new-wrappers - 禁止使用 new 包装基本类型（当前：error）
// const str = new String('test'); // ❌ ERROR: Do not use String as a constructor

// no-nonoctal-decimal-escape - 禁止八进制转义序列（当前：error）
// const str = '\50'; // ❌ ERROR: Don't use octal escape sequences

// no-octal-escape - 禁止八进制转义序列（当前：error）
// const str = '\1'; // ❌ ERROR: Don't use octal escape sequences

// no-param-reassign - 禁止重新分配函数参数（当前：error）
// function test(x) {
//   x = 1; // ❌ ERROR: Assignment to function parameter 'x'
// }

// no-import-assign - 禁止重新分配导入（当前：error）
// import { test } from './test';
// test = function() {}; // ❌ ERROR: Read-only import

// no-proto - 禁用 __proto__ 属性（当前：error）
// const obj = {};
// obj.__proto__ = {}; // ❌ ERROR: The '__proto__' property is deprecated

// no-redeclare - 禁止变量重复声明（当前：error）
// let x;
// let x; // ❌ ERROR: 'x' is already defined

// no-restricted-properties - 禁止特定的对象属性（当前：error）
// function test() {
//   arguments.callee; // ❌ ERROR: arguments.callee is deprecated
// }
// global.isNaN(1); // ❌ ERROR: Please use Number.isNaN instead

// no-return-assign - 禁止在 return 语句中赋值（当前：error）
// function test() {
//   return x = 1; // ❌ ERROR: Return statement should not contain assignment
// }

// no-unsafe-optional-chaining - 禁止不安全的可选链（当前：error）
// const x = obj?.prop(); // ❌ ERROR: Can not perform 'prop()' on a possibly null value

// no-return-await - 禁止不必要的 return await（当前：error）
// async function test() {
//   return await Promise.resolve(); // ❌ ERROR: Redundant use of 'await' on a return value
// }

// no-script-url - 禁止使用 javascript: url（当前：error）
// const url = 'javascript:void(0)'; // ❌ ERROR: Script URL is a form of eval

// no-self-compare - 禁止自身比较（当前：error）
// if (x === x) { // ❌ ERROR: Comparing 'x' to itself
// }

// no-sequences - 禁止逗号运算符（当前：error）
// const x = (1, 2); // ❌ ERROR: Unexpected use of comma operator

// no-throw-literal - 禁止抛出字面量异常（当前：error）
// throw 'error'; // ❌ ERROR: Expected an object to be thrown

// no-unmodified-loop-condition - 禁止未修改的循环条件（当前：warn）
// let x = true;
// while (x) { // ⚠️ WARN: 'x' is not modified in this loop
//   console.log('test');
// }

// no-unused-expressions - 禁止未使用的表达式（当前：error）
// 1 + 2; // ❌ ERROR: Expected an assignment or function call
// x || y; // ✅ OK: allowShortCircuit: true
// x ? y : z; // ✅ OK: allowTernary: true

// no-useless-backreference - 禁止正则表达式中的无用反向引用（当前：error）
// const pattern = /(a)\1/; // ❌ ERROR: Useless backreference

// no-useless-call - 禁止不必要的 call() 和 apply()（当前：error）
// function test() {
//   console.log(this);
// }
// test.call(this); // ❌ ERROR: Unnecessary use of .call()

// no-useless-catch - 禁止不必要的 catch（当前：error）
// try {
//   throw new Error();
// } catch (e) { // ❌ ERROR: Unnecessary catch clause
//   throw e;
// }

// no-useless-concat - 禁止不必要的字符串连接（当前：error）
// const str = 'a' + 'b'; // ❌ ERROR: Unexpected concatenation of literals

// no-useless-return - 禁止不必要的 return（当前：error）
// function test() {
//   return; // ❌ ERROR: Unnecessary return statement
// }

// no-void - 禁用 void 运算符（当前：error）
// void 0; // ❌ ERROR: Unexpected 'void' expression

// no-warning-comments - 禁止特定的警告注释（当前：off）
// TODO: fix this // ✅ OK: rule is off

// prefer-promise-reject-errors - 要求在 Promise.reject 中使用 Error 对象（当前：error）
// Promise.reject('error'); // ❌ ERROR: Expected an error object to be rejected
// ✅ Correct: Promise.reject(new Error('error'));

// prefer-regex-literals - 要求使用正则字面量而不是 RegExp 构造函数（当前：error）
// const pattern = new RegExp('test'); // ❌ ERROR: Use a regular expression literal instead
// ✅ Correct: const pattern = /test/;

// require-await - 禁止使用 async 函数而没有 await（当前：error）
// async function test() { // ❌ ERROR: Async function 'test' has no 'await' expression
//   return 1;
// }

// require-unicode-regexp - 要求正则表达式使用 u 标志（当前：warn）
// const pattern = /test/; // ⚠️ WARN: Please use the 'u' flag

// vars-on-top - 要求变量声明在顶部（当前：warn）
// function test() {
//   console.log('test');
//   let x = 1; // ⚠️ WARN: All 'var' declarations must be at the top of the function scope
// }

// wrap-iife - 要求 IIFE 使用括号包裹（当前：error）
// (function () { // ❌ ERROR: Wrap an immediate function invocation in parentheses
//   console.log('test');
// })();

// yoda - 要求或禁止 Yoda 条件（当前：error）
// if (1 === x) { // ❌ ERROR: Expected literal to be on the right side of '==='
// }

// ============================================================================
// Variables - 变量
// ============================================================================

// init-declarations - 要求或禁止变量声明初始化（当前：off）
// let x; // ✅ OK: rule is off

// no-delete-var - 禁止删除变量（当前：error）
// let x = 1;
// delete x; // ❌ ERROR: Variables should not be deleted

// no-label-var - 禁止标签变量名与作用域内变量同名（当前：error）
// let x;
// x: for (let i = 0; i < 10; i++) { // ❌ ERROR: Label 'x' is already declared
// }

// no-restricted-globals - 禁止特定的全局变量（当前：error）
// isFinite(1); // ❌ ERROR: Use Number.isFinite instead
// isNaN(1); // ❌ ERROR: Use Number.isNaN instead

// no-shadow - 禁止变量声明与外层作用域变量同名（当前：error）
// let x = 1;
// function test() {
//   let x = 2; // ❌ ERROR: 'x' is already declared in the upper scope
// }

// no-shadow-restricted-names - 禁止使用受限名称作为变量名（当前：error）
// let NaN = 1; // ❌ ERROR: Shadowing of global property 'NaN'

// no-undef - 禁止使用未声明的变量（当前：error）
// console.log(undefinedVar); // ❌ ERROR: 'undefinedVar' is not defined

// no-undef-init - 禁止初始化变量为 undefined（当前：warn）
// let x = undefined; // ⚠️ WARN: It's not necessary to initialize 'x' to undefined

// no-undefined - 禁止使用 undefined（当前：off）
// if (x === undefined) { // ✅ OK: rule is off
// }

// no-unused-vars - 禁止未使用的变量（当前：error）
// let x = 1; // ❌ ERROR: 'x' is assigned a value but never used

// no-use-before-define - 禁止在定义前使用变量（当前：error）
// console.log(x); // ❌ ERROR: 'x' was used before it was defined
// let x = 1;

// ============================================================================
// Node.js and CommonJS - Node.js 和 CommonJS
// ============================================================================

// no-buffer-constructor - 禁止使用 Buffer() 构造函数（当前：error）
// const buffer = new Buffer(10); // ❌ ERROR: Buffer() is deprecated

// no-mixed-requires - 禁止混合 require 声明（当前：error）
// const fs = require('fs');
// const path = require('path'); // ❌ ERROR: Do not mix core and module requires

// no-new-require - 禁止使用 new require（当前：error）
// const test = new require('test'); // ❌ ERROR: Do not use new with require

// no-path-concat - 禁止使用 __dirname 和 __filename 进行字符串连接（当前：error）
// const path = __dirname + '/test'; // ❌ ERROR: Use path.join() or path.resolve() instead of concatenation

// no-process-env - 禁止直接使用 process.env（当前：warn）
// const port = process.env.PORT; // ⚠️ WARN: Do not use process.env

// no-process-exit - 禁止使用 process.exit()（当前：warn）
// process.exit(1); // ⚠️ WARN: Don't use process.exit()

// no-restricted-modules - 禁止特定的模块（当前：off）
// const sys = require('sys'); // ✅ OK: rule is off

// no-sync - 禁止同步方法（当前：warn）
// const data = fs.readFileSync('test.txt'); // ⚠️ WARN: Unexpected sync method

// ============================================================================
// Stylistic Issues - 代码风格
// ============================================================================

// array-bracket-newline - 强制数组括号换行（当前：off）
// const arr = [
//   1,
//   2,
// ]; // ✅ OK: rule is off

// array-bracket-spacing - 强制数组括号内无空格（当前：error）
// const arr = [ 1, 2 ]; // ❌ ERROR: There should be no space after '['

// array-element-newline - 强制数组元素换行（当前：off）
// const arr = [1, 2, 3]; // ✅ OK: rule is off

// block-spacing - 强制块内空格（当前：error）
// if (true){console.log('test');} // ❌ ERROR: Expected a space before this brace

// brace-style - 强制大括号风格（当前：1TBS）
// if (true)
// {
//   console.log('test');
// } // ❌ ERROR: Opening curly brace does not appear on the same line as controlling statement

// camelcase - 强制使用驼峰命名（当前：error）
// const my_var = 1; // ❌ ERROR: Identifier 'my_var' is not in camel case

// capitalized-comments - 强制注释首字母大写（当前：off）
// // this is a comment // ✅ OK: rule is off

// comma-dangle - 强制或禁止尾随逗号（当前：error）
// const obj = { a: 1, b: 2 }; // ❌ ERROR: Missing trailing comma
// ✅ Correct: const obj = { a: 1, b: 2, };

// comma-spacing - 强制逗号前后空格（当前：error）
// const arr = [1,2]; // ❌ ERROR: A space is required after ','
// const arr = [1 , 2]; // ❌ ERROR: There should be no space before ','

// comma-style - 强制逗号在行尾（当前：error）
// const arr = [
//   1
//   , 2 // ❌ ERROR: A comma is not allowed after array element
// ];

// computed-property-spacing - 强制计算属性括号内无空格（当前：error）
// const obj = { [ 'key' ]: 1 }; // ❌ ERROR: There should be no space inside computed property brackets

// consistent-this - 强制 this 别名一致（当前：off）
// const self = this;
// const that = this; // ✅ OK: rule is off

// eol-last - 强制文件末尾换行（当前：error）
// // ❌ ERROR: Newline required at end of file but not found

// func-call-spacing - 强制函数调用时括号前无空格（当前：error）
// test (); // ❌ ERROR: Unexpected space between function name and paren

// func-name-matching - 强制函数名与赋值的变量名匹配（当前：error）
// const test = function name() {}; // ❌ ERROR: Function name 'name' should match variable name 'test'

// func-names - 要求或禁止函数命名（当前：off）
// const test = function() {}; // ✅ OK: rule is off

// func-style - 强制使用函数声明或表达式（当前：off）
// const test = function() {}; // ✅ OK: rule is off

// function-call-argument-newline - 强制函数调用参数换行（当前：off）
// test(1, 2, 3); // ✅ OK: rule is off

// function-paren-newline - 强制函数括号换行（当前：off）
// function test() {} // ✅ OK: rule is off

// id-denylist - 禁止特定的标识符（当前：off）
// const foo = 1; // ✅ OK: rule is off

// id-length - 强制标识符最小和最大长度（当前：off）
// const x = 1; // ✅ OK: rule is off

// id-match - 强制标识符匹配正则表达式（当前：off）
// const test = 1; // ✅ OK: rule is off

// implicit-arrow-linebreak - 强制箭头函数的箭头与参数在同一行（当前：error）
// const test =
//   () => {}; // ❌ ERROR: Unexpected line break after this arrow

// indent - 强制缩进（当前：off）
// function test() {
// const x = 1; // ✅ OK: rule is off
// }

// jsx-quotes - 强制 JSX 引号（当前：off）
// // ✅ OK: rule is off

// key-spacing - 强制对象属性键冒号前后空格（当前：error）
// const obj = { key : 1 }; // ❌ ERROR: There should be no space before ':'
// const obj = { key: 1 }; // ❌ ERROR: A space is required after ':'

// keyword-spacing - 强制关键字前后空格（当前：error）
// if(true) {} // ❌ ERROR: Missing space before '('
// if (true ) {} // ❌ ERROR: Unexpected space after ')'

// line-comment-position - 强制行注释位置（当前：off）
// const x = 1; // comment // ✅ OK: rule is off

// linebreak-style - 强制换行符风格（当前：error）
// // ❌ ERROR: Expected linebreaks to be 'LF' but found 'CRLF'

// lines-around-comment - 强制注释周围空行（当前：off）
// const x = 1;
// // comment
// const y = 2; // ✅ OK: rule is off

// lines-between-class-members - 强制类成员之间空行（当前：error）
// class Test {
//   method1() {}
//   method2() {} // ❌ ERROR: Expected blank line between class members
// }

// max-depth - 强制最大嵌套深度（当前：off）
// function test() {
//   if (true) {
//     if (true) {
//       if (true) { // ✅ OK: rule is off
//       }
//     }
//   }
// }

// max-len - 强制最大行长度（当前：off）
// const x = 'very long string that exceeds the maximum line length limit'; // ✅ OK: rule is off

// max-lines - 强制文件最大行数（当前：off）
// // ✅ OK: rule is off

// max-lines-per-function - 强制函数最大行数（当前：off）
// function test() {
//   // many lines
// } // ✅ OK: rule is off

// max-nested-callbacks - 强制最大回调嵌套深度（当前：off）
// async(function() {
//   async(function() { // ✅ OK: rule is off
//   });
// });

// max-params - 强制函数最大参数数量（当前：off）
// function test(a, b, c, d, e, f) {} // ✅ OK: rule is off

// max-statements - 强制函数最大语句数量（当前：off）
// function test() {
//   const a = 1;
//   const b = 2;
//   // many statements
// } // ✅ OK: rule is off

// max-statements-per-line - 强制每行最大语句数量（当前：error）
// const a = 1; const b = 2; // ❌ ERROR: This line has a maximum statement count of 1

// multiline-comment-style - 强制多行注释风格（当前：off）
// /**
//  * comment
//  */ // ✅ OK: rule is off

// multiline-ternary - 强制三元运算符换行（当前：off）
// const result = condition
//   ? value1
//   : value2; // ✅ OK: rule is off

// new-cap - 强制构造函数首字母大写（当前：error）
// const test = new testClass(); // ❌ ERROR: A constructor name should start with an uppercase letter

// new-parens - 强制 new 时使用括号（当前：error）
// const date = new Date; // ❌ ERROR: Missing '()' invoking a constructor

// newline-per-chained-call - 强制链式调用换行（当前：off）
// obj.method1().method2().method3(); // ✅ OK: rule is off

// no-array-constructor - 禁止使用 Array 构造函数（当前：error）
// const arr = new Array(1, 2, 3); // ❌ ERROR: The array literal notation [] is preferable

// no-bitwise - 禁止位运算符（当前：warn）
// const x = 1 | 2; // ⚠️ WARN: Unexpected use of '|'

// no-continue - 禁止 continue 语句（当前：warn）
// for (let i = 0; i < 10; i++) {
//   if (i === 5) continue; // ⚠️ WARN: Unexpected use of 'continue'
// }

// no-inline-comments - 禁止行内注释（当前：off）
// const x = 1; // comment // ✅ OK: rule is off

// no-lonely-if - 禁止 if 语句作为 else 块的唯一语句（当前：error）
// if (x) {
//   console.log('x');
// } else {
//   if (y) { // ❌ ERROR: Unexpected if as the only statement in an else block
//     console.log('y');
//   }
// }

// no-mixed-operators - 禁止混合运算符（当前：error）
// const x = a && b || c; // ❌ ERROR: Unexpected mix of '&&' and '||'

// no-mixed-spaces-and-tabs - 禁止混合空格和制表符（当前：error）
// const x = 1; // ❌ ERROR: Mixed spaces and tabs

// no-multi-assign - 禁止链式变量赋值（当前：warn）
// let a = b = c = 1; // ⚠️ WARN: Unexpected chained assignment

// no-multiple-empty-lines - 禁止多个空行（当前：error）
// const x = 1;
//
//
// const y = 2; // ❌ ERROR: Too many blank lines

// no-negated-condition - 禁止否定条件（当前：off）
// if (!x) { // ✅ OK: rule is off
// }

// no-nested-ternary - 禁止嵌套三元运算符（当前：error）
// const result = condition1 ? (condition2 ? value1 : value2) : value3; // ❌ ERROR: Do not nest ternary expressions

// no-new-object - 禁止使用 Object 构造函数（当前：error）
// const obj = new Object(); // ❌ ERROR: The object literal notation {} is preferable

// no-plusplus - 禁止一元运算符 ++ 和 --（当前：off）
// let x = 1;
// x++; // ✅ OK: rule is off

// no-restricted-syntax - 禁止特定的语法（当前：error）
// for (const key in obj) { // ❌ ERROR: for..in loops iterate over the entire prototype chain
//   console.log(key);
// }
// label: while (true) { // ❌ ERROR: Labels are a form of GOTO
//   break label;
// }
// with (obj) { // ❌ ERROR: 'with' is disallowed in strict mode
//   console.log(prop);
// }

// no-tabs - 禁止制表符（当前：error）
// const x = 1; // ❌ ERROR: Unexpected tab character

// no-ternary - 禁止三元运算符（当前：off）
// const result = condition ? value1 : value2; // ✅ OK: rule is off

// no-trailing-spaces - 禁止行尾空格（当前：error）
// const x = 1;  // ❌ ERROR: Trailing spaces not allowed

// no-underscore-dangle - 禁止标识符中使用下划线（当前：off）
// const _private = 1; // ✅ OK: rule is off

// no-unneeded-ternary - 禁止不必要的嵌套三元运算符（当前：error）
// const result = x ? x : y; // ❌ ERROR: Unnecessary use of boolean literals in ternary expression

// no-whitespace-before-property - 禁止属性前空格（当前：error）
// const obj = {};
// obj .prop = 1; // ❌ ERROR: Unexpected whitespace before property

// nonblock-statement-body-position - 强制非块语句的位置（当前：error）
// if (true)
//   console.log('test'); // ❌ ERROR: Expected this statement to be on a line after the previous keyword

// object-curly-newline - 强制对象大括号换行（当前：error）
// const obj = {
//   a: 1
//   , b: 2 // ❌ ERROR: Object properties must go on a new line if they are on new lines
// };

// object-curly-spacing - 强制对象大括号内空格（当前：error）
// const obj = {a: 1}; // ❌ ERROR: A space is required after '{'
// const obj = { a: 1 }; // ❌ ERROR: A space is required before '}'

// object-property-newline - 强制对象属性换行（当前：error）
// const obj = { a: 1, b: 2, c: 3 }; // ❌ ERROR: Object properties must go on a new line

// one-var - 强制每个作用域一个变量声明（当前：error）
// let x = 1, y = 2; // ❌ ERROR: Define one variable per assignment

// one-var-declaration-per-line - 强制每行一个变量声明（当前：error）
// let x = 1, y = 2; // ❌ ERROR: Declare one variable per line

// operator-assignment - 强制或禁止简化赋值运算符（当前：error）
// x = x + 1; // ❌ ERROR: Assignment can be replaced with operator assignment

// operator-linebreak - 强制运算符换行（当前：error）
// const result = a +
//   b; // ❌ ERROR: Operator '+' should be placed at the beginning of the line

// padded-blocks - 强制块内填充空行（当前：error）
// function test() {
//
//   console.log('test');
//
// } // ❌ ERROR: Block must not be padded by blank lines

// padding-line-between-statements - 强制语句间空行（当前：off）
// const x = 1;
// const y = 2; // ✅ OK: rule is off

// quote-props - 强制对象属性引号（当前：error）
// const obj = { 'key': 1 }; // ❌ ERROR: Unnecessarily quoted property 'key' found

// quotes - 强制使用单引号（当前：error）
// const str = "test"; // ❌ ERROR: Strings must use singlequote

// semi - 强制使用分号（当前：error）
// const x = 1 // ❌ ERROR: Missing semicolon

// semi-spacing - 强制分号前后空格（当前：error）
// const x = 1 ; // ❌ ERROR: Extra space before semicolon
// const x = 1; // ❌ ERROR: Missing space after semicolon

// semi-style - 强制分号位置（当前：error）
// const x = 1
// ; // ❌ ERROR: Extra semicolon

// sort-keys - 强制对象属性排序（当前：off）
// const obj = { b: 1, a: 2 }; // ✅ OK: rule is off

// sort-vars - 强制变量声明排序（当前：off）
// let b = 1;
// let a = 2; // ✅ OK: rule is off

// space-before-blocks - 强制块前空格（当前：error）
// if (true){} // ❌ ERROR: Missing space before opening brace

// space-before-function-paren - 强制函数括号前空格（当前：error）
// function test(){} // ❌ ERROR: Missing space before function parentheses
// const test = function(){}; // ❌ ERROR: Missing space before function parentheses
// const test = () => {}; // ❌ ERROR: Missing space before function parentheses

// space-in-parens - 强制括号内空格（当前：error）
// const x = ( 1 + 2 ); // ❌ ERROR: There should be no space inside this paren

// space-infix-ops - 强制运算符周围空格（当前：error）
// const x = 1+2; // ❌ ERROR: Operator '+' must be spaced

// space-unary-ops - 强制一元运算符前后空格（当前：error）
// const x = - 1; // ❌ ERROR: Unexpected space after unary operator '-'

// spaced-comment - 强制注释周围空格（当前：error）
// //comment // ❌ ERROR: Expected space after '//'
// /*comment*/ // ❌ ERROR: Expected space after '/*'

// switch-colon-spacing - 强制 switch 冒号前后空格（当前：error）
// switch (x) {
//   case 1: // ❌ ERROR: Expected space after ':'
//     break;
// }

// template-tag-spacing - 强制模板标签空格（当前：error）
// const fn = (strings) => strings;
// fn `test`; // ❌ ERROR: Unexpected space between template tag and template literal

// unicode-bom - 强制或禁止 Unicode BOM（当前：error）
// // ❌ ERROR: Unexpected Unicode BOM (Byte Order Mark)

// wrap-regex - 强制正则表达式换行（当前：off）
// const pattern = /^test$/; // ✅ OK: rule is off

// ============================================================================
// ECMAScript 6 - ES6+
// ============================================================================

// arrow-body-style - 强制箭头函数函数体风格（当前：as-needed）
// const test = () => { return 1; }; // ❌ ERROR: Unexpected block statement surrounding arrow body

// arrow-parens - 强制箭头函数参数使用括号（当前：error）
// const test = x => x; // ❌ ERROR: Expected parentheses around arrow function argument

// arrow-spacing - 强制箭头函数箭头前后空格（当前：error）
// const test = x=>x; // ❌ ERROR: Missing space before and after arrow

// constructor-super - 要求构造函数中调用 super()（当前：error）
// class Test extends Parent {
//   constructor() { // ❌ ERROR: Derived constructors must call super()
//   }
// }

// generator-star-spacing - 强制生成器函数星号位置（当前：error）
// function* test() {} // ❌ ERROR: Missing space before * in generator

// no-class-assign - 禁止重新分配类声明（当前：error）
// class Test {}
// Test = function() {}; // ❌ ERROR: 'Test' is read-only

// no-confusing-arrow - 禁止可能与比较运算符混淆的箭头函数（当前：error）
// const x = x => (1 ? 2 : 3); // ❌ ERROR: Arrow function used ambiguously with a conditional expression

// no-const-assign - 禁止重新分配 const 变量（当前：error）
// const x = 1;
// x = 2; // ❌ ERROR: 'x' is constant

// no-dupe-class-members - 禁止类成员重复（当前：error）
// class Test {
//   method() {}
//   method() {} // ❌ ERROR: Duplicate member 'method'
// }

// no-duplicate-imports - 禁止重复导入（当前：error）
// import { a } from './test';
// import { b } from './test'; // ❌ ERROR: Duplicate import

// no-new-symbol - 禁止使用 new Symbol（当前：error）
// const sym = new Symbol('test'); // ❌ ERROR: Symbol is not a constructor

// no-restricted-exports - 禁止特定的导出（当前：off）
// export { a }; // ✅ OK: rule is off

// no-restricted-imports - 禁止特定的导入（当前：off）
// import { a } from './test'; // ✅ OK: rule is off

// no-this-before-super - 禁止在调用 super() 之前使用 this（当前：error）
// class Test extends Parent {
//   constructor() {
//     this.x = 1; // ❌ ERROR: 'this' is not allowed before super()
//     super();
//   }
// }

// no-useless-computed-key - 禁止不必要的计算属性键（当前：error）
// const obj = { ['key']: 1 }; // ❌ ERROR: Unnecessarily computed property key found

// no-useless-constructor - 禁止不必要的构造函数（当前：error）
// class Test {
//   constructor() {} // ❌ ERROR: Useless constructor
// }

// no-useless-rename - 禁止解构时重命名（当前：error）
// const { a: a } = obj; // ❌ ERROR: Useless renaming

// no-var - 禁止使用 var（当前：error）
// var x = 1; // ❌ ERROR: Unexpected var, use let or const instead

// object-shorthand - 强制或禁止对象属性简写（当前：error）
// const obj = { x: x }; // ❌ ERROR: Expected property shorthand

// prefer-arrow-callback - 要求使用箭头函数作为回调（当前：error）
// arr.map(function(x) { // ❌ ERROR: Unexpected function expression
//   return x;
// });

// prefer-const - 要求使用 const 声明不会被重新赋值的变量（当前：error）
// let x = 1; // ❌ ERROR: 'x' is never reassigned. Use 'const' instead

// prefer-destructuring - 要求使用解构（当前：warn）
// const obj = { a: 1, b: 2 };
// const a = obj.a; // ⚠️ WARN: Use object destructuring

// prefer-exponentiation-operator - 要求使用指数运算符（当前：error）
// const x = Math.pow(2, 3); // ❌ ERROR: Prefer the exponentiation operator

// prefer-named-capture-group - 要求使用命名捕获组（当前：off）
// const pattern = /(\d+)/; // ✅ OK: rule is off

// prefer-numeric-literals - 要求使用数字字面量（当前：error）
// const x = 0o10; // ❌ ERROR: Use decimal literal instead of Octal

// prefer-object-has-own - 要求使用 Object.hasOwn（当前：error）
// const hasOwn = Object.prototype.hasOwnProperty.call(obj, 'key'); // ❌ ERROR: Use Object.hasOwn instead

// prefer-object-spread - 要求使用对象展开（当前：error）
// const obj = { ...obj1, ...obj2 }; // ✅ OK: this is correct
// const obj = Object.assign({}, obj1, obj2); // ❌ ERROR: Use object spread instead

// prefer-rest-params - 要求使用剩余参数（当前：error）
// function test() { // ❌ ERROR: Use the rest parameters instead of 'arguments'
//   console.log(arguments);
// }

// prefer-spread - 要求使用展开运算符（当前：error）
// const arr = [1, 2, 3];
// const arr2 = arr.concat([4, 5]); // ❌ ERROR: Use spread syntax instead

// prefer-template - 要求使用模板字面量（当前：error）
// const str = 'Hello ' + name; // ❌ ERROR: Unexpected string concatenation

// rest-spread-spacing - 强制剩余和展开运算符周围空格（当前：error）
// const arr = [... arr]; // ❌ ERROR: There should be no space after '...'

// sort-imports - 强制导入排序（当前：off）
// import { b } from './test';
// import { a } from './test'; // ✅ OK: rule is off

// symbol-description - 要求 Symbol 描述（当前：error）
// const sym = Symbol(); // ❌ ERROR: Expected Symbol to have a description

// template-curly-spacing - 强制模板字面量花括号内空格（当前：error）
// const str = `${ x }`; // ❌ ERROR: Unexpected space(s) inside template expression

// yield-star-spacing - 强制 yield* 星号位置（当前：error）
// function* test() {
//   yield* test2(); // ❌ ERROR: Missing space before *
// }
