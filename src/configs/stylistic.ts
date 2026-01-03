import type { FlatConfigItem } from '../types';
import { importDefault } from '../utils';

export async function stylistic(): Promise<FlatConfigItem[]> {
  const [
    plugin,
  ] = await Promise.all([
    importDefault(import('@stylistic/eslint-plugin')),
  ] as const);

  return [
    {
      name: 'purea/stylistic',
      plugins: { '@stylistic': plugin },
      rules: {
        // Array Rules - 数组相关规则
        '@stylistic/array-bracket-newline': 'off', // 强制数组括号换行（关闭）
        '@stylistic/array-bracket-spacing': ['error', 'never'], // 强制数组括号内无空格
        '@stylistic/array-element-newline': 'off', // 强制数组元素换行（关闭）

        // Arrow Function Rules - 箭头函数相关规则
        '@stylistic/arrow-parens': ['error', 'always'], // 强制箭头函数参数使用括号
        '@stylistic/arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数箭头前后空格

        // Block Rules - 块相关规则
        '@stylistic/block-spacing': ['error', 'always'], // 强制块内空格
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }], // 强制大括号风格（1TBS）
        '@stylistic/curly-newline': 'off', // 强制大括号换行（关闭）

        // Comma Rules - 逗号相关规则
        '@stylistic/comma-dangle': ['error', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        }], // 强制或禁止尾随逗号
        '@stylistic/comma-spacing': ['error', { before: false, after: true }], // 强制逗号前后空格
        '@stylistic/comma-style': ['error', 'last'], // 强制逗号在行尾

        // Computed Property Rules - 计算属性相关规则
        '@stylistic/computed-property-spacing': ['error', 'never'], // 强制计算属性括号内无空格

        // Dot Rules - 点号相关规则
        '@stylistic/dot-location': ['error', 'property'], // 强制点号在属性名称之前

        // End of File Rules - 文件末尾相关规则
        '@stylistic/eol-last': ['error', 'always'], // 强制文件末尾换行

        // Function Call Rules - 函数调用相关规则
        '@stylistic/function-call-argument-newline': 'off', // 强制函数调用参数换行（关闭）
        '@stylistic/function-call-spacing': ['error', 'never'], // 强制函数调用时括号前无空格
        '@stylistic/function-paren-newline': 'off', // 强制函数括号换行（关闭）

        // Generator Rules - 生成器相关规则
        '@stylistic/generator-star-spacing': ['error', { before: false, after: true }], // 强制生成器函数星号位置

        // Arrow Function Line Break Rules - 箭头函数换行相关规则
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'], // 强制箭头函数的箭头与参数在同一行

        // Indent Rules - 缩进相关规则
        '@stylistic/indent': ['error', 2], // 强制缩进为2空格
        '@stylistic/indent-binary-ops': 'off', // 强制二元运算符缩进（关闭）

        // JSX Rules - JSX相关规则
        '@stylistic/jsx-child-element-spacing': 'off', // 强制JSX子元素间距（关闭）
        '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'], // 强制JSX闭合括号位置
        '@stylistic/jsx-closing-tag-location': 'off', // 强制JSX闭合标签位置（关闭）
        '@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // 强制JSX花括号存在
        '@stylistic/jsx-curly-newline': 'off', // 强制JSX花括号换行（关闭）
        '@stylistic/jsx-curly-spacing': ['error', 'never'], // 强制JSX花括号内无空格
        '@stylistic/jsx-equals-spacing': ['error', 'never'], // 强制JSX等号周围无空格
        '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'], // 强制JSX第一个属性换行
        '@stylistic/jsx-function-call-newline': 'off', // 强制JSX函数调用换行（关闭）
        '@stylistic/jsx-indent': 'off', // 强制JSX缩进（已弃用，使用indent）
        '@stylistic/jsx-indent-props': 'off', // 强制JSX属性缩进（已弃用）
        '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }], // 强制JSX每行最大属性数
        '@stylistic/jsx-newline': ['error', { prevent: true }], // 强制JSX换行
        '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line' }], // 强制JSX每行一个表达式
        '@stylistic/jsx-pascal-case': 'off', // 强制JSX PascalCase（关闭）
        '@stylistic/jsx-props-no-multi-spaces': 'off', // 强制JSX属性无多个空格（已弃用，使用no-multi-spaces）
        '@stylistic/jsx-quotes': ['error', 'prefer-double'], // 强制JSX使用双引号
        '@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }], // 强制JSX自闭合
        '@stylistic/jsx-sort-props': 'off', // 强制JSX属性排序（关闭）
        '@stylistic/jsx-tag-spacing': ['error', {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        }], // 强制JSX标签间距
        '@stylistic/jsx-wrap-multilines': ['error', {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        }], // 强制JSX多行包裹

        // Key Rules - 键相关规则
        '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }], // 强制对象属性键冒号前后空格

        // Keyword Rules - 关键字相关规则
        '@stylistic/keyword-spacing': ['error', { before: true, after: true }], // 强制关键字前后空格

        // Line Comment Rules - 行注释相关规则
        '@stylistic/line-comment-position': 'off', // 强制行注释位置（关闭）

        // Line Break Rules - 换行相关规则
        '@stylistic/linebreak-style': ['error', 'unix'], // 强制换行符风格（Unix）

        // Lines Around Comment Rules - 注释周围空行相关规则
        '@stylistic/lines-around-comment': 'off', // 强制注释周围空行（关闭）

        // Lines Between Class Members Rules - 类成员之间空行相关规则
        '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], // 强制类成员之间空行

        // Expression List Style Rules - 表达式列表样式相关规则
        '@stylistic/exp-list-style': 'off', // 强制表达式列表样式（关闭）

        // Max Length Rules - 最大长度相关规则
        '@stylistic/max-len': ['error', {
          code: 120,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }], // 强制最大行长度为120

        // Max Statements Per Line Rules - 每行最大语句数相关规则
        '@stylistic/max-statements-per-line': ['error', { max: 1 }], // 强制每行最大语句数量

        // Member Delimiter Style Rules - 成员分隔符样式相关规则
        '@stylistic/member-delimiter-style': 'off', // 强制成员分隔符样式（关闭）

        // Multiline Comment Style Rules - 多行注释样式相关规则
        '@stylistic/multiline-comment-style': 'off', // 强制多行注释样式（关闭）

        // Multiline Ternary Rules - 多行三元运算符相关规则
        '@stylistic/multiline-ternary': 'off', // 强制三元运算符换行（关闭）

        // New Parens Rules - new括号相关规则
        '@stylistic/new-parens': 'error', // 强制new时使用括号

        // Newline Per Chained Call Rules - 链式调用换行相关规则
        '@stylistic/newline-per-chained-call': 'off', // 强制链式调用换行（关闭）

        // No Confusing Arrow Rules - 箭头函数混淆相关规则
        '@stylistic/no-confusing-arrow': ['error', { allowParens: true }], // 禁止可能与比较运算符混淆的箭头函数

        // No Extra Parens Rules - 额外括号相关规则
        '@stylistic/no-extra-parens': ['warn', 'all', { conditionalAssign: true, nestedBinaryExpressions: false, returnAssign: false }], // 禁止不必要的括号

        // No Extra Semi Rules - 额外分号相关规则
        '@stylistic/no-extra-semi': 'error', // 禁止多余的分号

        // No Floating Decimal Rules - 浮点小数相关规则
        '@stylistic/no-floating-decimal': 'error', // 禁止浮点小数

        // No Mixed Operators Rules - 混合运算符相关规则
        '@stylistic/no-mixed-operators': [
          'error',
          {
            groups: [
              ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
              ['&&', '||'],
              ['in', 'instanceof'],
            ],
            allowSamePrecedence: true,
          },
        ], // 禁止混合运算符

        // No Mixed Spaces and Tabs Rules - 混合空格和制表符相关规则
        '@stylistic/no-mixed-spaces-and-tabs': 'error', // 禁止混合空格和制表符

        // No Multi Spaces Rules - 多个空格相关规则
        '@stylistic/no-multi-spaces': 'error', // 禁止多个空格

        // No Multiple Empty Lines Rules - 多个空行相关规则
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }], // 禁止多个空行

        // No Tabs Rules - 制表符相关规则
        '@stylistic/no-tabs': 'error', // 禁止制表符

        // No Trailing Spaces Rules - 行尾空格相关规则
        '@stylistic/no-trailing-spaces': 'error', // 禁止行尾空格

        // No Whitespace Before Property Rules - 属性前空格相关规则
        '@stylistic/no-whitespace-before-property': 'error', // 禁止属性前空格

        // Nonblock Statement Body Position Rules - 非块语句位置相关规则
        '@stylistic/nonblock-statement-body-position': ['error', 'beside'], // 强制非块语句的位置

        // Object Rules - 对象相关规则
        '@stylistic/object-curly-newline': ['warn', { multiline: true, consistent: true }], // 强制对象大括号换行
        '@stylistic/object-curly-spacing': ['error', 'always'], // 强制对象大括号内空格
        '@stylistic/object-property-newline': 'off', // 强制对象属性换行（关闭）

        // One Var Declaration Per Line Rules - 每行一个变量声明相关规则
        '@stylistic/one-var-declaration-per-line': ['error', 'always'], // 强制每行一个变量声明

        // Operator Linebreak Rules - 运算符换行相关规则
        '@stylistic/operator-linebreak': ['error', 'before'], // 强制运算符换行

        // Padded Blocks Rules - 块填充空行相关规则
        '@stylistic/padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }], // 强制块内填充空行

        // Padding Line Between Statements Rules - 语句间空行相关规则
        '@stylistic/padding-line-between-statements': 'off', // 强制语句间空行（关闭）

        // Quote Props Rules - 属性引号相关规则
        '@stylistic/quote-props': ['error', 'as-needed'], // 强制对象属性引号

        // Quotes Rules - 引号相关规则
        '@stylistic/quotes': ['error', 'single', { avoidEscape: true }], // 强制使用单引号

        // Rest Spread Spacing Rules - 剩余和展开运算符相关规则
        '@stylistic/rest-spread-spacing': ['error', 'never'], // 强制剩余和展开运算符周围无空格

        // Semi Rules - 分号相关规则
        '@stylistic/semi': ['error', 'always'], // 强制使用分号
        '@stylistic/semi-spacing': ['error', { before: false, after: true }], // 强制分号前后空格
        '@stylistic/semi-style': ['error', 'last'], // 强制分号位置

        // Space Rules - 空格相关规则
        '@stylistic/space-before-blocks': ['error', 'always'], // 强制块前空格
        '@stylistic/space-before-function-paren': ['error', {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        }], // 强制函数括号前空格
        '@stylistic/space-in-parens': ['error', 'never'], // 强制括号内空格
        '@stylistic/space-infix-ops': 'error', // 强制运算符周围空格
        '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }], // 强制一元运算符前后空格

        // Spaced Comment Rules - 注释空格相关规则
        '@stylistic/spaced-comment': ['error', 'always', {
          line: { markers: ['/'], exceptions: ['-', '+'] },
          block: { balanced: true, markers: ['!'], exceptions: ['*'] },
        }], // 强制注释周围空格

        // Switch Colon Spacing Rules - switch冒号间距相关规则
        '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }], // 强制switch冒号前后空格

        // Template Rules - 模板相关规则
        '@stylistic/template-curly-spacing': ['error', 'never'], // 强制模板字面量花括号内空格
        '@stylistic/template-tag-spacing': ['error', 'never'], // 强制模板标签空格

        // Type Rules - 类型相关规则
        '@stylistic/type-annotation-spacing': 'off', // 强制类型注解空格（关闭）
        '@stylistic/type-generic-spacing': 'off', // 强制类型泛型空格（关闭）
        '@stylistic/type-named-tuple-spacing': 'off', // 强制类型命名元组空格（关闭）

        // Wrap Rules - 包裹相关规则
        '@stylistic/wrap-iife': ['error', 'any'], // 要求IIFE使用括号包裹
        '@stylistic/wrap-regex': 'off', // 强制正则表达式换行（关闭）

        // Yield Star Spacing Rules - yield*星号间距相关规则
        '@stylistic/yield-star-spacing': ['error', { before: true, after: false }], // 强制yield*星号位置
      },
    },
  ];
}
