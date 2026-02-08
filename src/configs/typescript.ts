import type { FlatConfigItem, TypeScriptOptions } from '../types';
import { renameRules, importDefault } from '../utils';

export async function typescript(options: TypeScriptOptions = {}): Promise<FlatConfigItem[]> {
  const componentExts = options.componentExts ?? [];

  const tsconfigPath = options.tsconfigPath ?? undefined;
  const isTypeAware = !!tsconfigPath;

  const [
    tsParser,
    tsPlugin,
  ] = await Promise.all([
    importDefault(import('@typescript-eslint/parser')),
    importDefault(import('@typescript-eslint/eslint-plugin')),
  ] as const);

  const files = ['**/*.?([cm])ts', '**/*.?([cm])tsx', ...componentExts.map(ext => `**/*.${ext}`)];

  return [
    {
      name: 'purea/typescript/setup',
      plugins: { ts: tsPlugin },
    },
    {
      name: 'purea/typescript/parser',
      files,
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          sourceType: 'module',
          extraFileExtensions: componentExts.map(ext => `.${ext}`),
          ...isTypeAware ? {
            projectService: {
              allowDefaultProject: ['./*.js'],
              defaultProject: tsconfigPath,
            },
            tsconfigRootDir: process.cwd(),
          } : {},
        },
      },
    },
    {
      name: 'purea/typescript/rules',
      files,
      rules: {
        ...renameRules(
          tsPlugin.configs['eslint-recommended'].overrides![0].rules!,
          { '@typescript-eslint': 'ts' }
        ),
        ...renameRules(
          tsPlugin.configs.strict.rules!,
          { '@typescript-eslint': 'ts' }
        ),

        // 是否开启类型检查相关规则
        ...isTypeAware ? {
          'ts/no-floating-promises': 'error', // 禁止浮动的 Promise
          'ts/no-unnecessary-type-assertion': 'error', // 禁止不必要的类型断言
          'ts/no-unsafe-assignment': 'warn', // 将 any 类型赋值给具体类型时警告
          'ts/no-unsafe-call': 'warn', // 调用 any 类型的函数时警告
          'ts/no-unsafe-member-access': 'warn', // 访问 any 类型的属性时警告
          'ts/no-unsafe-return': 'warn', // 返回 any 类型时警告
          'ts/no-array-delete': 'warn', // 使用 delete 删除数组元素时警告（建议使用 splice）
          'ts/no-base-to-string': 'error', // 禁止对可能没有 toString 方法的对象调用 toString()
          'ts/no-confusing-void-expression': 'warn', // 检测可能被误用的 void 表达式
          'ts/no-duplicate-type-constituents': 'warn', // 联合类型中有重复的类型时警告
          'ts/no-misused-promises': 'error', // 禁止误用 Promise
          'ts/no-unnecessary-boolean-literal-compare': 'warn', // 不必要的布尔字面量比较时警告（如 x === true）
          'ts/no-unnecessary-condition': 'warn', // 总是 true 或 false 的条件判断时警告
          'ts/no-unsafe-argument': 'warn', // 将 any 类型作为参数传递时警告
          'ts/no-unsafe-enum-comparison': 'error', // 检测不安全的枚举比较（如枚举与数字比较）
          'ts/only-throw-error': 'error', // 要求只抛出 Error 对象
          'ts/prefer-nullish-coalescing': ['warn', { ignoreConditionalTests: true, ignoreMixedLogicalExpressions: true }], // 优先使用 ?? 而非 ||
          'ts/prefer-optional-chain': 'warn', // 优先使用可选链 (?.) 而非 && 链
          'ts/consistent-return': 'warn', // 函数应始终返回或始终不返回值
          'ts/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: true }], // 类型导出使用 type 关键字
          'ts/dot-notation': 'warn', // 优先使用 obj.prop 而非 obj['prop']
          'ts/no-deprecated': 'warn', // 使用已弃用的 API 时警告
          'ts/no-implied-eval': 'error', // 禁止隐式 eval（如 setTimeout('code')）
          'ts/no-meaningless-void-operator': 'error', // 禁止无意义的 void 运算符（如 void 0）
          'ts/no-misused-spread': 'error', // 禁止在不可迭代的对象上使用展开运算符
          'ts/no-mixed-enums': 'error', // 禁止混合字符串和数字枚举成员
          'ts/no-redundant-type-constituents': 'warn', // 联合类型中有冗余的类型时警告
          'ts/no-unnecessary-qualifier': 'warn', // 不必要的命名空间限定符时警告
          'ts/no-unnecessary-type-arguments': 'warn', // 可以推断的类型参数时警告
          'ts/no-unnecessary-type-conversion': 'warn', // 不必要的类型转换时警告
          'ts/no-unnecessary-template-expression': 'warn', // 不必要的模板表达式时警告（如 `${x}`）
          'ts/no-unnecessary-type-parameters': 'warn', // 不必要的类型参数时警告
          'ts/no-useless-default-assignment': 'warn', // 无用的默认赋值时警告（如 x = x）
          'ts/non-nullable-type-assertion-style': 'warn', // 强制非空类型断言风格
          'ts/prefer-destructuring': ['warn', { array: false, object: true }], // 优先使用对象解构赋值
          'ts/prefer-find': 'warn', // 优先使用 find() 而非 filter()[0]
          'ts/prefer-includes': 'warn', // 优先使用 includes() 而非 indexOf() !== -1
          'ts/prefer-promise-reject-errors': 'warn', // Promise.reject 应传递 Error 对象
          'ts/prefer-readonly': 'warn', // 优先使用 readonly 修饰符
          'ts/prefer-reduce-type-parameter': 'warn', // reduce 回调应显式声明类型参数
          'ts/prefer-regexp-exec': 'warn', // 正则表达式优先使用 exec() 而非 String.prototype.match()
          'ts/prefer-return-this-type': 'warn', // 返回 this 的方法应标注返回类型
          'ts/prefer-string-starts-ends-with': 'warn', // 优先使用 startsWith/endsWith 而非 indexOf
          'ts/promise-function-async': 'warn', // 返回 Promise 的函数应为 async
          'ts/related-getter-setter-pairs': 'warn', // getter 和 setter 应成对出现
          'ts/require-array-sort-compare': 'warn', // 数组排序应提供比较函数
          'ts/require-await': 'error', // async 函数中必须有 await
          'ts/restrict-plus-operands': ['error', { skipCompoundAssignments: false }], // 加法运算符操作数类型必须兼容
          'ts/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true, allowAny: false, allowNullish: true }], // 模板表达式中禁止 any，允许数字/布尔/可空值
          'ts/return-await': ['error', 'in-try-catch'], // try-catch 中必须 await 返回的 Promise
          'ts/switch-exhaustiveness-check': 'warn', // switch 语句应处理所有枚举值
          'ts/unbound-method': ['warn', { ignoreStatic: true }], // 引用类方法时警告（可能需要绑定 this）
          'ts/use-unknown-in-catch-callback-variable': 'warn', // catch 回调参数应使用 unknown 而非 any
          ...options.overridesTypeAwareRules,
        } : {},

        // Possible Errors - 可能的错误
        'ts/ban-ts-comment': ['warn', { 'ts-expect-error': 'allow-with-description', 'ts-ignore': 'allow-with-description', 'ts-nocheck': 'allow-with-description', minimumDescriptionLength: 3 }], // 允许使用带描述的 @ts-expect-error、@ts-ignore、@ts-nocheck
        'ts/ban-tslint-comment': 'warn', // 禁止使用 tslint 注释（如 // tslint:disable）
        'ts/no-explicit-any': 'warn', // 使用 any 类型时警告（建议使用更具体的类型）
        'ts/await-thenable': 'off', // 禁止 await 非 Promise 值（如 await 123、await 'string'）（关闭）
        'ts/no-confusing-non-null-assertion': 'error', // 禁止令人困惑的非空断言
        'ts/no-empty-function': 'warn', // 空函数时警告（除非有注释说明）
        'ts/no-extra-non-null-assertion': 'warn', // 多余的非空断言时警告（如 !!x!）
        'ts/no-non-null-assertion': 'off', // 使用非空断言 (!) 时警告
        'ts/no-unsafe-function-type': 'warn', // 使用 any 类型的函数类型时警告
        'ts/no-unsafe-type-assertion': 'off', // 禁止不安全的类型断言（如 any 类型断言为 string 类型）（关闭）
        'ts/no-unsafe-unary-minus': 'warn', // 对 any 类型使用一元减号时警告
        'ts/strict-boolean-expressions': 'off', // 布尔上下文中禁止使用字符串/数字 (关闭)

        // Best Practices - 最佳实践
        'ts/adjacent-overload-signatures': 'warn', // 强制相邻的重载签名
        'ts/array-type': 'off', // 允许自由使用 string[] 或 Array<string> 两种形式
        'ts/class-literal-property-style': ['warn', 'getters'], // 类字面量属性优先使用 getter 方法
        'ts/class-methods-use-this': 'warn', // 不使用 this 的类方法应改为静态方法
        'ts/consistent-generic-constructors': 'warn', // 泛型构造函数风格保持一致
        'ts/consistent-indexed-object-style': 'warn', // 索引签名使用 Record<K, V> 而非 [k: string]: V
        'ts/consistent-type-assertions': ['warn', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }], // 类型断言使用 as 而非 <>
        'ts/consistent-type-definitions': ['warn', 'interface'], // 优先使用 interface 而非 type 定义类型
        'ts/consistent-type-imports': ['warn', { prefer: 'type-imports', disallowTypeAnnotations: false }], // 类型导入使用 import type
        'ts/default-param-last': 'warn', // 默认参数应放在参数列表最后
        'ts/explicit-function-return-type': 'off', // 要求显式声明函数返回类型（警告级别，允许表达式）(关闭)
        'ts/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }], // 类成员应显式声明可访问性（public 除外）
        'ts/explicit-module-boundary-types': 'off', // 导出的函数和类应显式声明类型
        'ts/init-declarations': 'off', // 不要求变量声明时初始化
        'ts/max-params': ['warn', { max: 4 }], // 函数参数不超过 4 个（建议使用对象参数）
        'ts/member-ordering': 'off', // 不强制类成员排序
        'ts/method-signature-style': 'warn', // 方法签名使用 property: () => void 而非 property(): void
        'ts/naming-convention': 'off', // 强制命名约定（关闭）
        'ts/no-array-constructor': 'warn', // 使用 new Array() 时警告（建议使用 []）
        'ts/no-dupe-class-members': 'error', // 禁止重复的类成员
        'ts/no-empty-interface': 'warn', // 空接口时警告（建议使用 type）
        'ts/no-for-in-array': 'error', // 禁止在数组上使用 for-in（应使用 for-of 或 forEach）
        'ts/no-import-type-side-effects': 'error', // 禁止类型导入的副作用
        'ts/no-inferrable-types': 'off', // 不禁止显式声明可以推断的类型
        'ts/no-invalid-this': 'error', // 禁止在非类方法中使用 this
        'ts/no-loop-func': 'error', // 禁止在循环中创建函数（可能导致闭包问题）
        'ts/no-loss-of-precision': 'error', // 禁止精度丢失的字面量（如 9007199254740992）
        'ts/no-magic-numbers': 'off', // 允许使用魔术数字
        'ts/no-namespace': 'warn', // 使用 namespace 时警告（建议使用模块）
        'ts/no-redeclare': 'error', // 禁止重复声明
        'ts/no-restricted-imports': 'off', // 限制导入（关闭）
        'ts/no-restricted-types': 'off', // 限制类型（关闭）
        'ts/no-type-alias': 'off', // 禁止类型别名（关闭）
        'ts/no-unnecessary-parameter-property-assignment': 'warn', // 不必要的参数属性赋值时警告
        'ts/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true, // 允许短路表达式（如 condition && doSomething()）
            allowTaggedTemplates: true, // 允许标记的模板字符串（如 console.log`message`）
            allowTernary: true, // 允许三元表达式（如 condition ? a : b）
          },
        ], // 禁止未使用的表达式，但允许常见的有用模式
        'ts/no-unused-private-class-members': 'warn', // 禁止未使用的私有类成员
        'ts/no-useless-constructor': 'warn', // 无用的构造函数时警告（如只有 super() 调用）
        'ts/no-useless-empty-export': 'warn', // 无用的空导出时警告
        'ts/parameter-properties': 'off', // 不强制参数属性
        'ts/prefer-as-const': 'warn', // 优先使用 as const 创建字面量类型
        'ts/prefer-enum-initializers': 'warn', // 枚举成员优先使用初始化器
        'ts/prefer-for-of': 'warn', // 优先使用 for-of 遍历数组
        'ts/prefer-function-type': 'warn', // 函数类型使用 () => void 而非 Function 接口
        'ts/prefer-literal-enum-member': 'warn', // 枚举成员优先使用字面量值
        'ts/prefer-namespace-keyword': 'off', // 不强制使用 namespace 关键字
        'ts/prefer-readonly-parameter-types': 'off', // 不强制只读参数类型
        'ts/prefer-ts-expect-error': 'warn', // 优先使用 @ts-expect-error 而非 @ts-ignore
        'ts/triple-slash-reference': ['warn', { lib: 'never', path: 'never', types: 'never' }], // 禁止使用三斜杠引用（应使用 import）
        'ts/typedef': ['warn', { arrayDestructuring: false, arrowParameter: false, memberVariableDeclaration: false, objectDestructuring: false, parameter: false, propertyDeclaration: false, variableDeclaration: false, variableDeclarationIgnoreFunction: true }], // 要求显式类型声明（警告级别，灵活配置）
        'ts/unified-signatures': 'warn', // 合并可以统一的函数重载签名

        // Variables - 变量相关
        'ts/no-shadow': 'warn', // 不检查变量遮蔽
        'ts/no-unused-vars': 'off', // 不检查未使用的变量
        'ts/no-use-before-define': ['warn', { classes: false, functions: false, variables: true }], // 允许在定义前使用变量

        // ECMAScript 6 - ES6+ 特性
        'ts/no-var-requires': 'error', // 禁止使用 var require（应使用 import）
        'ts/sort-type-constituents': 'off', // 联合类型成员应按字母顺序排序
      },
    },
  ];
}
