import type { FlatConfigItem } from '../types';
import { importDefault } from '../utils';

export async function javascript(): Promise<FlatConfigItem[]> {
  const [
    globals,
  ] = await Promise.all([
    importDefault(import('globals')),
  ] as const);

  return [
    {
      name: 'purea/javascript',
      languageOptions: {
        sourceType: 'module',
        globals: {
          ...globals.node,
          ...globals.es2023,
          ...globals.browser,
          window: 'readonly',
          document: 'readonly',
          navigator: 'readonly',
        },
      },
      linterOptions: { reportUnusedDisableDirectives: true },
    },
    {
      name: 'purea/javascript/rules',
      rules: {
        // Possible Problems - 可能的问题
        'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }], // 强制数组方法的回调函数有返回值
        'constructor-super': 'error', // 要求构造函数中调用 super()
        'for-direction': 'error', // 检查 for-in 循环的方向
        'getter-return': 'error', // 强制 getter 函数返回值
        'no-async-promise-executor': 'error', // 禁止在 Promise executor 函数中使用 async
        'no-await-in-loop': 'warn', // 禁止在循环中使用 await
        'no-class-assign': 'error', // 禁止重新分配类声明
        'no-compare-neg-zero': 'error', // 禁止与 -0 比较
        'no-cond-assign': ['error', 'always'], // 禁止在条件语句中使用赋值
        'no-const-assign': 'error', // 禁止重新分配 const 变量
        'no-constant-binary-expression': 'warn', // 禁止常量二元表达式
        'no-constant-condition': ['warn', { checkLoops: false }], // 禁用常量条件表达式（循环中除外）
        'no-constructor-return': 'error', // 禁止在构造函数中返回值
        'no-control-regex': 'error', // 禁止正则表达式中的控制字符
        'no-debugger': 'error', // 禁用 debugger 语句
        'no-dupe-args': 'error', // 禁止函数参数重复
        'no-dupe-class-members': 'error', // 禁止类成员重复
        'no-dupe-else-if': 'error', // 禁止重复的 else-if 条件
        'no-dupe-keys': 'error', // 禁止对象字面量中重复的键
        'no-duplicate-case': 'error', // 禁止 switch 语句中重复的 case
        'no-duplicate-imports': ['error', { includeExports: true }], // 禁止重复导入
        'no-empty-character-class': 'error', // 禁止正则表达式中的空字符类
        'no-empty-pattern': 'error', // 禁止空的解构模式
        'no-ex-assign': 'error', // 禁止重新分配异常参数
        'no-fallthrough': 'error', // 禁止 switch 语句中的 fallthrough
        'no-func-assign': 'error', // 禁止重新分配函数声明
        'no-import-assign': 'error', // 禁止重新分配导入
        'no-inner-declarations': 'error', // 禁止在嵌套块中声明函数
        'no-invalid-regexp': 'error', // 禁止无效的正则表达式字符串
        'no-irregular-whitespace': 'error', // 禁止不规则的空白字符
        'no-loss-of-precision': 'error', // 禁止因精度丢失的数字字面量
        'no-misleading-character-class': 'error', // 禁止正则表达式中具有误导性的字符类
        'no-new-native-nonconstructor': 'error', // 禁止对非构造函数使用 new
        'no-obj-calls': 'error', // 禁止将全局对象作为函数调用
        'no-promise-executor-return': 'error', // 禁止在 Promise executor 函数中返回值
        'no-prototype-builtins': 'error', // 禁止直接调用 Object.prototype 方法
        'no-self-assign': 'error', // 禁止自我赋值
        'no-self-compare': 'error', // 禁止自身比较
        'no-setter-return': 'error', // 禁止 setter 函数返回值
        'no-sparse-arrays': 'error', // 禁止稀疏数组
        'no-template-curly-in-string': 'error', // 禁止在字符串中使用模板字面量占位符
        'no-this-before-super': 'error', // 禁止在调用 super() 之前使用 this
        'no-unassigned-vars': 'off', // 禁止未赋值的变量（关闭）
        'no-undef': 'error', // 禁止使用未声明的变量
        'no-unexpected-multiline': 'error', // 禁止令人困惑的多行表达式
        'no-unmodified-loop-condition': 'warn', // 禁止未修改的循环条件
        'no-unreachable': 'error', // 禁止无法到达的代码
        'no-unreachable-loop': 'error', // 禁止无法到达的循环
        'no-unsafe-finally': 'error', // 禁止 finally 块中的控制流语句
        'no-unsafe-negation': 'error', // 禁止关系运算符的否定操作符位置不正确
        'no-unsafe-optional-chaining': 'error', // 禁止不安全的可选链
        'no-unused-private-class-members': 'error', // 禁止未使用的私有类成员
        'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // 禁止未使用的变量
        'no-use-before-define': ['error', { functions: true, classes: true, variables: true }], // 禁止在定义前使用变量
        'no-useless-assignment': 'error', // 禁止无用的赋值
        'no-useless-backreference': 'error', // 禁止正则表达式中的无用反向引用
        'require-atomic-updates': 'error', // 禁止可能导致竞态条件的赋值
        'use-isnan': 'error', // 要求使用 isNaN() 检查 NaN
        'valid-typeof': ['error', { requireStringLiterals: true }], // 强制 typeof 表达式与有效字符串比较

        // Suggestions - 建议
        'accessor-pairs': ['error', { getWithoutSet: false, setWithoutGet: true }], // 强制 getter/setter 成对出现（setter 必须有 getter）
        'arrow-body-style': 'off', // 要求箭头函数体使用大括号（关闭）
        'block-scoped-var': 'error', // 强制变量在块作用域内使用
        camelcase: 'off', // 强制使用驼峰命名（关闭）
        'capitalized-comments': 'off', // 强制或禁止注释首字母大写（关闭）
        'class-methods-use-this': 'warn', // 强制类方法使用 this
        complexity: ['warn', 25], // 强制代码复杂度不超过 25（调整为警告级别）
        'consistent-return': 'error', // 强制 return 语句始终返回或不返回
        'consistent-this': 'off', // 强制 this 别名一致（关闭）
        curly: ['error', 'multi-line'], // 强制多行语句使用大括号，单行允许省略
        'default-case': 'warn', // 强制 switch 语句有 default 分支
        'default-case-last': 'error', // 强制 default 分支在 switch 语句的最后
        'default-param-last': 'error', // 强制默认参数在最后
        'dot-notation': ['error', { allowKeywords: true }], // 强制使用点号表示法访问属性（允许关键字）
        eqeqeq: ['error', 'always', { null: 'ignore' }], // 强制使用 === 和 !==（null 除外）
        'func-name-matching': 'off', // 强制函数名与赋值的变量名匹配（关闭）
        'func-names': 'off', // 强制或禁止函数命名（关闭）
        'func-style': 'off', // 强制使用函数声明或表达式（关闭）
        'grouped-accessor-pairs': 'error', // 强制 getter/setter 分组在一起
        'guard-for-in': 'warn', // 强制 for-in 循环中包含 if 语句
        'id-denylist': 'off', // 禁止特定的标识符（关闭）
        'id-length': 'off', // 强制标识符的最小和最大长度（关闭）
        'id-match': 'off', // 强制标识符匹配正则表达式（关闭）
        'init-declarations': 'off', // 要求或禁止变量声明初始化（关闭）
        'logical-assignment-operators': 'off', // 强制或禁止逻辑赋值运算符（关闭）
        'max-classes-per-file': 'off', // 强制每个文件最多 1 个类（关闭，更灵活）
        'max-depth': ['warn', { max: 4 }], // 强制最大嵌套深度
        'max-lines': 'off', // 强制文件最大行数（关闭）
        'max-lines-per-function': 'off', // 强制函数最大行数（关闭）
        'max-nested-callbacks': 'off', // 强制最大回调嵌套深度（关闭）
        'max-params': ['warn', { max: 4 }], // 强制函数最大参数数量
        'max-statements': 'off', // 强制函数最大语句数量（关闭）
        'new-cap': 'off', // 强制构造函数首字母大写（关闭）
        'no-alert': 'warn', // 禁用 alert，警告级别
        'no-array-constructor': 'off', // 禁止使用 Array 构造函数（关闭）
        'no-bitwise': 'warn', // 禁止位运算符
        'no-caller': 'error', // 禁用 arguments.caller 和 arguments.callee
        'no-case-declarations': 'error', // 禁止在 case 子句中声明变量
        'no-console': 'warn', // 禁用 console, 警告级别
        'no-continue': 'warn', // 禁止 continue 语句
        'no-delete-var': 'error', // 禁止删除变量
        'no-div-regex': 'warn', // 禁止看起来像除法的正则表达式
        'no-else-return': ['error', { allowElseIf: false }], // 禁止在 if 语句中的 return 后使用 else
        'no-empty': ['warn', { allowEmptyCatch: true }], // 禁止空语句块（catch 除外）
        'no-empty-function': 'warn', // 禁止空函数
        'no-empty-static-block': 'off', // 禁止空的静态块（关闭）
        'no-eq-null': 'error', // 禁止与 null 进行比较
        'no-eval': 'error', // 禁用 eval()
        'no-extend-native': 'error', // 禁止扩展原生对象
        'no-extra-bind': 'error', // 禁止不必要的 bind()
        'no-extra-boolean-cast': 'error', // 禁止不必要的布尔类型转换
        'no-extra-label': 'error', // 禁止不必要的标签
        'no-global-assign': 'error', // 禁止赋值给全局变量
        'no-implicit-coercion': ['warn', { boolean: true, number: true, string: true, allow: ['!!', '+'] }], // 禁止隐式类型转换（警告级别，允许常见模式）
        'no-implicit-globals': 'off', // 禁止全局变量和函数声明（关闭）
        'no-implied-eval': 'error', // 禁止类似 eval 的方法
        'no-inline-comments': 'off', // 禁止行内注释（关闭）
        'no-invalid-this': 'warn', // 禁止在类之外使用 this
        'no-iterator': 'error', // 禁用 __iterator__ 属性
        'no-label-var': 'error', // 禁止标签变量名与作用域内变量同名
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }], // 禁用标签语句
        'no-lone-blocks': 'error', // 禁止不必要的嵌套块
        'no-lonely-if': 'error', // 禁止 if 语句作为 else 块的唯一语句
        'no-loop-func': 'error', // 禁止在循环中声明函数
        'no-magic-numbers': 'off', // 禁止魔术数字（关闭）
        'no-multi-assign': 'error', // 禁止链式变量赋值
        'no-multi-str': 'error', // 禁止多行字符串
        'no-negated-condition': 'off', // 禁止否定条件（关闭）
        'no-nested-ternary': 'off', // 禁止嵌套三元运算符（关闭）
        'no-new': 'error', // 禁止使用 new 而不赋值
        'no-new-func': 'error', // 禁止使用 new Function
        'no-new-wrappers': 'error', // 禁止使用 new 包装基本类型
        'no-nonoctal-decimal-escape': 'error', // 禁止八进制转义序列
        'no-object-constructor': 'off', // 禁止使用 Object 构造函数（关闭）
        'no-octal': 'off', // 禁止八进制字面量（关闭）
        'no-octal-escape': 'error', // 禁止八进制转义序列
        'no-param-reassign': ['error', { props: false }], // 禁止重新分配函数参数（属性除外）
        'no-plusplus': 'off', // 禁止一元运算符 ++ 和 --（关闭）
        'no-proto': 'error', // 禁用 __proto__ 属性
        'no-redeclare': ['error', { builtinGlobals: false }], // 禁止变量重复声明
        'no-regex-spaces': 'error', // 禁止正则表达式中的多个空格
        'no-restricted-exports': 'off', // 禁止特定的导出（关闭）
        'no-restricted-globals': 'off', // 禁止特定的全局变量（关闭）
        'no-restricted-imports': 'off', // 禁止特定的导入（关闭）
        'no-restricted-properties': [
          'error',
          {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
          },
          {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
          },
          {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
          },
        ], // 禁止特定的对象属性
        'no-restricted-syntax': [
          'error',
          {
            selector: 'ForInStatement',
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
          },
          {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
          },
          {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
          },
        ], // 禁止特定的语法
        'no-return-assign': ['error', 'except-parens'], // 禁止在 return 语句中赋值（括号内除外）
        'no-script-url': 'error', // 禁止使用 javascript: url
        'no-sequences': 'error', // 禁止逗号运算符
        'no-shadow': 'error', // 禁止变量声明与外层作用域变量同名
        'no-shadow-restricted-names': 'error', // 禁止使用受限名称作为变量名
        'no-ternary': 'off', // 禁止三元运算符（关闭）
        'no-throw-literal': 'error', // 禁止抛出字面量异常
        'no-undef-init': 'warn', // 禁止初始化变量为 undefined
        'no-undefined': 'off', // 禁止使用 undefined（关闭）
        'no-underscore-dangle': 'off', // 禁止标识符中使用下划线（关闭）
        'no-unneeded-ternary': 'off', // 禁止不需要的三元运算符（关闭）
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }], // 禁止未使用的表达式（允许短路和三元）
        'no-unused-labels': 'error', // 禁止未使用的标签
        'no-useless-call': 'error', // 禁止不必要的 call() 和 apply()
        'no-useless-catch': 'error', // 禁止不必要的 catch
        'no-useless-computed-key': 'error', // 禁止不必要的计算属性键
        'no-useless-concat': 'error', // 禁止不必要的字符串连接
        'no-useless-constructor': 'error', // 禁止不必要的构造函数
        'no-useless-escape': 'error', // 禁止不必要的转义字符
        'no-useless-rename': 'error', // 禁止解构时重命名
        'no-useless-return': 'error', // 禁止不必要的 return
        'no-var': 'error', // 禁止使用 var
        'no-void': 'error', // 禁用 void 运算符
        'no-warning-comments': 'off', // 禁止特定的警告注释（关闭）
        'no-with': 'off', // 禁止 with 语句（关闭）
        'object-shorthand': ['error', 'always'], // 强制或禁止对象属性简写
        'one-var': ['error', 'never'], // 强制每个作用域一个变量声明
        'operator-assignment': ['error', 'always'], // 强制或禁止简化赋值运算符
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }], // 要求使用箭头函数作为回调
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }], // 要求使用 const 声明不会被重新赋值的变量
        'prefer-destructuring': ['warn', {
          array: false,
          object: true,
        }, { enforceForRenamedProperties: false }], // 要求使用解构
        'prefer-exponentiation-operator': 'error', // 要求使用指数运算符
        'prefer-named-capture-group': 'warn', // 要求使用命名捕获组（警告）
        'prefer-numeric-literals': 'error', // 要求使用数字字面量
        'prefer-object-has-own': 'error', // 要求使用 Object.hasOwn
        'prefer-object-spread': 'error', // 要求使用对象展开
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }], // 要求在 Promise.reject 中使用 Error 对象（允许空 reject）
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }], // 要求使用正则字面量而不是 RegExp 构造函数
        'prefer-rest-params': 'error', // 要求使用剩余参数
        'prefer-spread': 'error', // 要求使用展开运算符
        'prefer-template': 'error', // 要求使用模板字面量
        'preserve-caught-error': 'off', // 要求保留捕获的异常（关闭）
        radix: 'off', // 强制 parseInt 使用基数参数（关闭）
        'require-await': 'error', // 禁止使用 async 函数而没有 await
        'require-unicode-regexp': 'off', // 要求正则表达式使用 u 标志
        'require-yield': 'off', // 要求生成器函数中有 yield（关闭）
        'sort-imports': 'off', // 强制导入排序（关闭）
        'sort-keys': 'off', // 强制对象属性排序（关闭）
        'sort-vars': 'off', // 强制变量声明排序（关闭）
        strict: 'off', // 强制使用严格模式（关闭）
        'symbol-description': 'error', // 要求 Symbol 描述
        'vars-on-top': 'warn', // 要求变量声明在顶部
        yoda: 'error', // 要求或禁止 Yoda 条件
      },
    },
  ];
}
