import type { FlatConfigItem } from '../types';
import { importDefault } from '../utils';

export async function typescript(): Promise<FlatConfigItem[]> {
  const [
    tsParser,
    tsPlugin,
  ] = await Promise.all([
    importDefault(import('@typescript-eslint/parser')),
    importDefault(import('@typescript-eslint/eslint-plugin')),
  ] as const);

  return [
    {
      name: 'purea/typescript',
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          tsconfigRootDir: process.cwd(),
          project: './tsconfig.json',
          sourceType: 'module',
        },
      },
      plugins: { '@typescript-eslint': tsPlugin },
    },
    {
      name: 'purea/typescript/rules',
      files: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
      rules: {
        // Possible Errors - 可能的错误
        '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-expect-error': 'allow-with-description', 'ts-ignore': 'allow-with-description', 'ts-nocheck': 'allow-with-description', minimumDescriptionLength: 3 }], // 允许使用带描述的 @ts-expect-error、@ts-ignore、@ts-nocheck
        '@typescript-eslint/ban-tslint-comment': 'warn', // 禁止使用 tslint 注释（如 // tslint:disable）
        '@typescript-eslint/no-explicit-any': 'warn', // 使用 any 类型时警告（建议使用更具体的类型）
        '@typescript-eslint/no-floating-promises': 'error', // 禁止浮动的 Promise
        '@typescript-eslint/no-misused-new': 'error', // 禁止误用 new 运算符
        '@typescript-eslint/no-unnecessary-type-assertion': 'error', // 禁止不必要的类型断言
        '@typescript-eslint/no-unsafe-assignment': 'warn', // 将 any 类型赋值给具体类型时警告
        '@typescript-eslint/no-unsafe-call': 'warn', // 调用 any 类型的函数时警告
        '@typescript-eslint/no-unsafe-member-access': 'warn', // 访问 any 类型的属性时警告
        '@typescript-eslint/no-unsafe-return': 'warn', // 返回 any 类型时警告
        '@typescript-eslint/await-thenable': 'off', // 禁止 await 非 Promise 值（如 await 123、await 'string'）（关闭）
        '@typescript-eslint/no-array-delete': 'warn', // 使用 delete 删除数组元素时警告（建议使用 splice）
        '@typescript-eslint/no-base-to-string': 'error', // 禁止对可能没有 toString 方法的对象调用 toString()
        '@typescript-eslint/no-confusing-non-null-assertion': 'error', // 禁止令人困惑的非空断言
        '@typescript-eslint/no-confusing-void-expression': 'warn', // 检测可能被误用的 void 表达式
        '@typescript-eslint/no-duplicate-enum-values': 'error', // 禁止枚举中有重复的值
        '@typescript-eslint/no-duplicate-type-constituents': 'warn', // 联合类型中有重复的类型时警告
        '@typescript-eslint/no-dynamic-delete': 'error', // 禁止使用动态属性名的 delete 操作
        '@typescript-eslint/no-empty-function': 'warn', // 空函数时警告（除非有注释说明）
        '@typescript-eslint/no-extra-non-null-assertion': 'warn', // 多余的非空断言时警告（如 !!x!）
        '@typescript-eslint/no-empty-object-type': 'error', // 禁止使用 {} 作为类型（应使用 object 或 Record<string, unknown>）
        '@typescript-eslint/no-extraneous-class': 'error', // 禁止没有实例成员的类
        '@typescript-eslint/no-invalid-void-type': 'error', // 禁止无效的 void 类型
        '@typescript-eslint/no-misused-promises': 'error', // 禁止误用 Promise
        '@typescript-eslint/no-non-null-assertion': 'warn', // 使用非空断言 (!) 时警告
        '@typescript-eslint/no-unnecessary-type-constraint': 'error', // 禁止不必要的泛型约束（如 <T extends any>）
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn', // 不必要的布尔字面量比较时警告（如 x === true）
        '@typescript-eslint/no-unnecessary-condition': 'warn', // 总是 true 或 false 的条件判断时警告
        '@typescript-eslint/no-unsafe-argument': 'warn', // 将 any 类型作为参数传递时警告
        '@typescript-eslint/no-unsafe-enum-comparison': 'error', // 检测不安全的枚举比较（如枚举与数字比较）
        '@typescript-eslint/no-unsafe-function-type': 'warn', // 使用 any 类型的函数类型时警告
        '@typescript-eslint/no-unsafe-type-assertion': 'off', // 禁止不安全的类型断言（如 any 类型断言为 string 类型）（关闭）
        '@typescript-eslint/no-unsafe-unary-minus': 'warn', // 对 any 类型使用一元减号时警告
        '@typescript-eslint/no-wrapper-object-types': 'error', // 禁止包装对象类型
        '@typescript-eslint/only-throw-error': 'error', // 要求只抛出 Error 对象
        '@typescript-eslint/prefer-nullish-coalescing': ['warn', { ignoreConditionalTests: true, ignoreMixedLogicalExpressions: true }], // 优先使用 ?? 而非 ||
        '@typescript-eslint/prefer-optional-chain': 'warn', // 优先使用可选链 (?.) 而非 && 链
        '@typescript-eslint/strict-boolean-expressions': ['warn', { allowString: false, allowNumber: false, allowNullableObject: true, allowAny: false }], // 布尔上下文中禁止使用字符串/数字，允许可空对象

        // Best Practices - 最佳实践
        '@typescript-eslint/adjacent-overload-signatures': 'warn', // 强制相邻的重载签名
        '@typescript-eslint/array-type': 'off', // 允许自由使用 string[] 或 Array<string> 两种形式
        '@typescript-eslint/class-literal-property-style': ['warn', 'getters'], // 类字面量属性优先使用 getter 方法
        '@typescript-eslint/class-methods-use-this': 'warn', // 不使用 this 的类方法应改为静态方法
        '@typescript-eslint/consistent-generic-constructors': 'warn', // 泛型构造函数风格保持一致
        '@typescript-eslint/consistent-indexed-object-style': 'warn', // 索引签名使用 Record<K, V> 而非 [k: string]: V
        '@typescript-eslint/consistent-return': 'warn', // 函数应始终返回或始终不返回值
        '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }], // 类型断言使用 as 而非 <>
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'], // 优先使用 interface 而非 type 定义类型
        '@typescript-eslint/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: true }], // 类型导出使用 type 关键字
        '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', disallowTypeAnnotations: false }], // 类型导入使用 import type
        '@typescript-eslint/default-param-last': 'warn', // 默认参数应放在参数列表最后
        '@typescript-eslint/dot-notation': 'warn', // 优先使用 obj.prop 而非 obj['prop']
        '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true, allowDirectConstAssertionInArrowFunctions: true, allowConciseArrowFunctionExpressionsStartingWithVoid: false }], // 要求显式声明函数返回类型（警告级别，允许表达式）
        '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }], // 类成员应显式声明可访问性（public 除外）
        '@typescript-eslint/explicit-module-boundary-types': 'warn', // 导出的函数和类应显式声明类型
        '@typescript-eslint/init-declarations': 'off', // 不要求变量声明时初始化
        '@typescript-eslint/max-params': ['warn', { max: 4 }], // 函数参数不超过 4 个（建议使用对象参数）
        '@typescript-eslint/member-ordering': 'off', // 不强制类成员排序
        '@typescript-eslint/method-signature-style': 'warn', // 方法签名使用 property: () => void 而非 property(): void
        '@typescript-eslint/naming-convention': [
          'warn',
          // 变量和函数：驼峰命名或大写常量
          {
            selector: ['variable', 'function'],
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          // 参数：驼峰命名
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          // 类属性：驼峰或大写常量，私有属性建议前缀下划线
          {
            selector: 'classProperty',
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'classProperty',
            modifiers: ['private', 'protected'],
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          // 类方法：驼峰命名，私有方法建议前缀下划线
          {
            selector: 'classMethod',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'classMethod',
            modifiers: ['private', 'protected'],
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          // 访问器：驼峰命名
          {
            selector: 'accessor',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          // 类型、接口、类、枚举：大驼峰命名，禁止 I 前缀
          {
            selector: ['typeAlias', 'interface', 'class', 'enum'],
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
          // 枚举成员：全大写
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
          },
          // 泛型参数：大驼峰命名，推荐 T/K/V 等前缀
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            prefix: ['T', 'K', 'V', 'E', 'R', 'P', 'U'],
          },
          // 对象属性：灵活命名
          {
            selector: 'objectLiteralProperty',
            format: null,
          },
        ], // 强制命名约定
        '@typescript-eslint/no-array-constructor': 'warn', // 使用 new Array() 时警告（建议使用 []）
        '@typescript-eslint/no-deprecated': 'warn', // 使用已弃用的 API 时警告
        '@typescript-eslint/no-dupe-class-members': 'error', // 禁止重复的类成员
        '@typescript-eslint/no-empty-interface': 'warn', // 空接口时警告（建议使用 type）
        '@typescript-eslint/no-for-in-array': 'error', // 禁止在数组上使用 for-in（应使用 for-of 或 forEach）
        '@typescript-eslint/no-implied-eval': 'error', // 禁止隐式 eval（如 setTimeout('code')）
        '@typescript-eslint/no-import-type-side-effects': 'error', // 禁止类型导入的副作用
        '@typescript-eslint/no-inferrable-types': 'off', // 不禁止显式声明可以推断的类型
        '@typescript-eslint/no-invalid-this': 'error', // 禁止在非类方法中使用 this
        '@typescript-eslint/no-loop-func': 'error', // 禁止在循环中创建函数（可能导致闭包问题）
        '@typescript-eslint/no-loss-of-precision': 'error', // 禁止精度丢失的字面量（如 9007199254740992）
        '@typescript-eslint/no-magic-numbers': 'off', // 允许使用魔术数字
        '@typescript-eslint/no-meaningless-void-operator': 'error', // 禁止无意义的 void 运算符（如 void 0）
        '@typescript-eslint/no-misused-spread': 'error', // 禁止在不可迭代的对象上使用展开运算符
        '@typescript-eslint/no-mixed-enums': 'error', // 禁止混合字符串和数字枚举成员
        '@typescript-eslint/no-namespace': 'warn', // 使用 namespace 时警告（建议使用模块）
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error', // 禁止同时使用非空断言和空值合并（如 x! ?? y）
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // 禁止在可选链后使用非空断言（如 obj.prop!?.value）
        '@typescript-eslint/no-redeclare': 'error', // 禁止重复声明
        '@typescript-eslint/no-redundant-type-constituents': 'warn', // 联合类型中有冗余的类型时警告
        '@typescript-eslint/no-require-imports': 'error', // 禁止使用 require 导入（应使用 import）
        '@typescript-eslint/no-restricted-imports': 'off', // 限制导入（关闭）
        '@typescript-eslint/no-restricted-types': 'off', // 限制类型（关闭）
        '@typescript-eslint/no-this-alias': 'error', // 禁止 this 别名
        '@typescript-eslint/no-type-alias': 'off', // 禁止类型别名（关闭）
        '@typescript-eslint/no-unnecessary-qualifier': 'warn', // 不必要的命名空间限定符时警告
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn', // 可以推断的类型参数时警告
        '@typescript-eslint/no-unnecessary-type-conversion': 'warn', // 不必要的类型转换时警告
        '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'warn', // 不必要的参数属性赋值时警告
        '@typescript-eslint/no-unnecessary-template-expression': 'warn', // 不必要的模板表达式时警告（如 `${x}`）
        '@typescript-eslint/no-unnecessary-type-parameters': 'warn', // 不必要的类型参数时警告
        '@typescript-eslint/no-unsafe-declaration-merging': 'error', // 禁止不安全的声明合并
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true, // 允许短路表达式（如 condition && doSomething()）
            allowTaggedTemplates: true, // 允许标记的模板字符串（如 console.log`message`）
            allowTernary: true, // 允许三元表达式（如 condition ? a : b）
          },
        ], // 禁止未使用的表达式，但允许常见的有用模式
        '@typescript-eslint/no-unused-private-class-members': 'warn', // 禁止未使用的私有类成员
        '@typescript-eslint/no-useless-constructor': 'warn', // 无用的构造函数时警告（如只有 super() 调用）
        '@typescript-eslint/no-useless-default-assignment': 'warn', // 无用的默认赋值时警告（如 x = x）
        '@typescript-eslint/no-useless-empty-export': 'warn', // 无用的空导出时警告
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn', // 强制非空类型断言风格
        '@typescript-eslint/parameter-properties': 'off', // 不强制参数属性
        '@typescript-eslint/prefer-as-const': 'warn', // 优先使用 as const 创建字面量类型
        '@typescript-eslint/prefer-destructuring': ['warn', { array: false, object: true }], // 优先使用对象解构赋值
        '@typescript-eslint/prefer-enum-initializers': 'warn', // 枚举成员优先使用初始化器
        '@typescript-eslint/prefer-find': 'warn', // 优先使用 find() 而非 filter()[0]
        '@typescript-eslint/prefer-for-of': 'warn', // 优先使用 for-of 遍历数组
        '@typescript-eslint/prefer-function-type': 'warn', // 函数类型使用 () => void 而非 Function 接口
        '@typescript-eslint/prefer-includes': 'warn', // 优先使用 includes() 而非 indexOf() !== -1
        '@typescript-eslint/prefer-literal-enum-member': 'warn', // 枚举成员优先使用字面量值
        '@typescript-eslint/prefer-namespace-keyword': 'off', // 不强制使用 namespace 关键字
        '@typescript-eslint/prefer-promise-reject-errors': 'warn', // Promise.reject 应传递 Error 对象
        '@typescript-eslint/prefer-readonly': 'warn', // 优先使用 readonly 修饰符
        '@typescript-eslint/prefer-readonly-parameter-types': 'off', // 不强制只读参数类型
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn', // reduce 回调应显式声明类型参数
        '@typescript-eslint/prefer-regexp-exec': 'warn', // 正则表达式优先使用 exec() 而非 String.prototype.match()
        '@typescript-eslint/prefer-return-this-type': 'warn', // 返回 this 的方法应标注返回类型
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn', // 优先使用 startsWith/endsWith 而非 indexOf
        '@typescript-eslint/prefer-ts-expect-error': 'warn', // 优先使用 @ts-expect-error 而非 @ts-ignore
        '@typescript-eslint/promise-function-async': 'warn', // 返回 Promise 的函数应为 async
        '@typescript-eslint/related-getter-setter-pairs': 'warn', // getter 和 setter 应成对出现
        '@typescript-eslint/require-array-sort-compare': 'warn', // 数组排序应提供比较函数
        '@typescript-eslint/require-await': 'error', // async 函数中必须有 await
        '@typescript-eslint/restrict-plus-operands': ['error', { skipCompoundAssignments: false }], // 加法运算符操作数类型必须兼容
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true, allowAny: false, allowNullish: true }], // 模板表达式中禁止 any，允许数字/布尔/可空值
        '@typescript-eslint/return-await': ['error', 'in-try-catch'], // try-catch 中必须 await 返回的 Promise
        '@typescript-eslint/switch-exhaustiveness-check': 'warn', // switch 语句应处理所有枚举值
        '@typescript-eslint/triple-slash-reference': ['warn', { lib: 'never', path: 'never', types: 'never' }], // 禁止使用三斜杠引用（应使用 import）
        '@typescript-eslint/typedef': ['warn', { arrayDestructuring: false, arrowParameter: false, memberVariableDeclaration: false, objectDestructuring: false, parameter: false, propertyDeclaration: false, variableDeclaration: false, variableDeclarationIgnoreFunction: true }], // 要求显式类型声明（警告级别，灵活配置）
        '@typescript-eslint/unbound-method': ['warn', { ignoreStatic: true }], // 引用类方法时警告（可能需要绑定 this）
        '@typescript-eslint/unified-signatures': 'warn', // 合并可以统一的函数重载签名
        '@typescript-eslint/use-unknown-in-catch-callback-variable': 'warn', // catch 回调参数应使用 unknown 而非 any

        // Variables - 变量相关
        '@typescript-eslint/no-shadow': 'off', // 不检查变量遮蔽（使用 JavaScript 规则）
        '@typescript-eslint/no-unused-vars': 'off', // 不检查未使用的变量（使用 JavaScript 规则）
        '@typescript-eslint/no-use-before-define': 'off', // 允许在定义前使用变量（使用 JavaScript 规则）

        // ECMAScript 6 - ES6+ 特性
        '@typescript-eslint/no-var-requires': 'error', // 禁止使用 var require（应使用 import）
        '@typescript-eslint/sort-type-constituents': 'warn', // 联合类型成员应按字母顺序排序
      },
    },
  ];
}
