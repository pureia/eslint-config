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
      plugins: { style: plugin },
      rules: {
        // Array Rules - 数组相关规则
        'style/array-bracket-newline': 'off', // 强制数组括号换行（关闭）
        'style/array-bracket-spacing': ['error', 'never'], // 强制数组括号内无空格
        'style/array-element-newline': 'off', // 强制数组元素换行（关闭）

        // Arrow Function Rules - 箭头函数相关规则
        'style/arrow-parens': ['error', 'as-needed'], // 箭头函数只有一个参数时可以省略圆括号（警告）
        'style/arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数箭头前后空格

        // Block Rules - 块相关规则
        'style/block-spacing': ['error', 'always'], // 强制块内空格
        'style/brace-style': ['error', '1tbs', { allowSingleLine: true }], // 强制大括号风格（1TBS）
        'style/curly-newline': 'off', // 强制大括号换行（关闭）

        // Comma Rules - 逗号相关规则
        'style/comma-dangle': ['error', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        }], // 强制或禁止尾随逗号
        'style/comma-spacing': ['error', { before: false, after: true }], // 强制逗号前后空格
        'style/comma-style': ['error', 'last'], // 强制逗号在行尾

        // Computed Property Rules - 计算属性相关规则
        'style/computed-property-spacing': ['error', 'never'], // 强制计算属性括号内无空格

        // Dot Rules - 点号相关规则
        'style/dot-location': ['error', 'property'], // 强制点号在属性名称之前

        // End of File Rules - 文件末尾相关规则
        'style/eol-last': ['error', 'always'], // 强制文件末尾换行

        // Function Call Rules - 函数调用相关规则
        'style/function-call-argument-newline': 'off', // 强制函数调用参数换行（关闭）
        'style/function-call-spacing': ['error', 'never'], // 强制函数调用时括号前无空格
        'style/function-paren-newline': 'off', // 强制函数括号换行（关闭）

        // Generator Rules - 生成器相关规则
        'style/generator-star-spacing': ['error', { before: false, after: true }], // 强制生成器函数星号位置

        // Arrow Function Line Break Rules - 箭头函数换行相关规则
        'style/implicit-arrow-linebreak': ['error', 'beside'], // 强制箭头函数的箭头与参数在同一行

        // Indent Rules - 缩进相关规则
        'style/indent': ['error', 2], // 强制缩进为2空格
        'style/indent-binary-ops': 'off', // 强制二元运算符缩进（关闭）

        // JSX Rules - JSX相关规则
        'style/jsx-child-element-spacing': 'off', // 强制JSX子元素间距（关闭）
        'style/jsx-closing-bracket-location': ['error', 'tag-aligned'], // 强制JSX闭合括号位置
        'style/jsx-closing-tag-location': 'off', // 强制JSX闭合标签位置（关闭）
        'style/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // 强制JSX花括号存在
        'style/jsx-curly-newline': 'off', // 强制JSX花括号换行（关闭）
        'style/jsx-curly-spacing': ['error', 'never'], // 强制JSX花括号内无空格
        'style/jsx-equals-spacing': ['error', 'never'], // 强制JSX等号周围无空格
        'style/jsx-first-prop-new-line': ['error', 'multiline'], // 强制JSX第一个属性换行
        'style/jsx-function-call-newline': 'off', // 强制JSX函数调用换行（关闭）
        'style/jsx-indent': 'off', // 强制JSX缩进（已弃用，使用indent）
        'style/jsx-indent-props': 'off', // 强制JSX属性缩进（已弃用）
        'style/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }], // 强制JSX每行最大属性数
        'style/jsx-newline': ['error', { prevent: true }], // 强制JSX换行
        'style/jsx-one-expression-per-line': ['error', { allow: 'single-line' }], // 强制JSX每行一个表达式
        'style/jsx-pascal-case': 'off', // 强制JSX PascalCase（关闭）
        'style/jsx-props-no-multi-spaces': 'off', // 强制JSX属性无多个空格（已弃用，使用no-multi-spaces）
        'style/jsx-quotes': ['error', 'prefer-double'], // 强制JSX使用双引号
        'style/jsx-self-closing-comp': ['error', { component: true, html: true }], // 强制JSX自闭合
        'style/jsx-sort-props': 'off', // 强制JSX属性排序（关闭）
        'style/jsx-tag-spacing': ['error', {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        }], // 强制JSX标签间距
        'style/jsx-wrap-multilines': ['error', {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        }], // 强制JSX多行包裹

        // Key Rules - 键相关规则
        'style/key-spacing': ['error', { beforeColon: false, afterColon: true }], // 强制对象属性键冒号前后空格

        // Keyword Rules - 关键字相关规则
        'style/keyword-spacing': ['error', { before: true, after: true }], // 强制关键字前后空格

        // Line Comment Rules - 行注释相关规则
        'style/line-comment-position': 'off', // 强制行注释位置（关闭）

        // Line Break Rules - 换行相关规则
        'style/linebreak-style': ['error', 'unix'], // 强制换行符风格（Unix）

        // Lines Around Comment Rules - 注释周围空行相关规则
        'style/lines-around-comment': 'off', // 强制注释周围空行（关闭）

        // Lines Between Class Members Rules - 类成员之间空行相关规则
        'style/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], // 强制类成员之间空行

        // Expression List Style Rules - 表达式列表样式相关规则
        'style/exp-list-style': 'off', // 强制表达式列表样式（关闭）

        // Max Length Rules - 最大长度相关规则
        'style/max-len': 'off', // 强制最大行长度为120

        // Max Statements Per Line Rules - 每行最大语句数相关规则
        'style/max-statements-per-line': ['error', { max: 1 }], // 强制每行最大语句数量

        // Member Delimiter Style Rules - 成员分隔符样式相关规则
        'style/member-delimiter-style': 'off', // 强制成员分隔符样式（关闭）

        // Multiline Comment Style Rules - 多行注释样式相关规则
        'style/multiline-comment-style': 'off', // 强制多行注释样式（关闭）

        // Multiline Ternary Rules - 多行三元运算符相关规则
        'style/multiline-ternary': 'off', // 强制三元运算符换行（关闭）

        // New Parens Rules - new括号相关规则
        'style/new-parens': 'error', // 强制new时使用括号

        // Newline Per Chained Call Rules - 链式调用换行相关规则
        'style/newline-per-chained-call': 'off', // 强制链式调用换行（关闭）

        // No Confusing Arrow Rules - 箭头函数混淆相关规则
        'style/no-confusing-arrow': 'off', // 禁止可能与比较运算符混淆的箭头函数（关闭）

        // No Extra Parens Rules - 额外括号相关规则
        'style/no-extra-parens': ['warn', 'all', { conditionalAssign: true, nestedBinaryExpressions: false, returnAssign: false }], // 禁止不必要的括号

        // No Extra Semi Rules - 额外分号相关规则
        'style/no-extra-semi': 'error', // 禁止多余的分号

        // No Floating Decimal Rules - 浮点小数相关规则
        'style/no-floating-decimal': 'error', // 禁止浮点小数

        // No Mixed Operators Rules - 混合运算符相关规则
        'style/no-mixed-operators': [
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
        'style/no-mixed-spaces-and-tabs': 'error', // 禁止混合空格和制表符

        // No Multi Spaces Rules - 多个空格相关规则
        'style/no-multi-spaces': 'error', // 禁止多个空格

        // No Multiple Empty Lines Rules - 多个空行相关规则
        'style/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }], // 禁止多个空行

        // No Tabs Rules - 制表符相关规则
        'style/no-tabs': 'error', // 禁止制表符

        // No Trailing Spaces Rules - 行尾空格相关规则
        'style/no-trailing-spaces': 'error', // 禁止行尾空格

        // No Whitespace Before Property Rules - 属性前空格相关规则
        'style/no-whitespace-before-property': 'error', // 禁止属性前空格

        // Nonblock Statement Body Position Rules - 非块语句位置相关规则
        'style/nonblock-statement-body-position': ['error', 'beside'], // 强制非块语句的位置

        // Object Rules - 对象相关规则
        'style/object-curly-newline': ['warn', { multiline: true, consistent: true }], // 强制对象大括号换行
        'style/object-curly-spacing': ['error', 'always'], // 强制对象大括号内空格
        'style/object-property-newline': 'off', // 强制对象属性换行（关闭）

        // One Var Declaration Per Line Rules - 每行一个变量声明相关规则
        'style/one-var-declaration-per-line': ['error', 'always'], // 强制每行一个变量声明

        // Operator Linebreak Rules - 运算符换行相关规则
        'style/operator-linebreak': ['error', 'before'], // 强制运算符换行

        // Padded Blocks Rules - 块填充空行相关规则
        'style/padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }], // 强制块内填充空行

        // Padding Line Between Statements Rules - 语句间空行相关规则
        'style/padding-line-between-statements': 'off', // 强制语句间空行（关闭）

        // Quote Props Rules - 属性引号相关规则
        'style/quote-props': ['error', 'as-needed'], // 强制对象属性引号

        // Quotes Rules - 引号相关规则
        'style/quotes': ['error', 'single', { avoidEscape: true }], // 强制使用单引号

        // Rest Spread Spacing Rules - 剩余和展开运算符相关规则
        'style/rest-spread-spacing': ['error', 'never'], // 强制剩余和展开运算符周围无空格

        // Semi Rules - 分号相关规则
        'style/semi': ['error', 'always'], // 强制使用分号
        'style/semi-spacing': ['error', { before: false, after: true }], // 强制分号前后空格
        'style/semi-style': ['error', 'last'], // 强制分号位置

        // Space Rules - 空格相关规则
        'style/space-before-blocks': ['error', 'always'], // 强制块前空格
        'style/space-before-function-paren': ['error', {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        }], // 强制函数括号前空格
        'style/space-in-parens': ['error', 'never'], // 强制括号内空格
        'style/space-infix-ops': 'error', // 强制运算符周围空格
        'style/space-unary-ops': ['error', { words: true, nonwords: false }], // 强制一元运算符前后空格

        // Spaced Comment Rules - 注释空格相关规则
        'style/spaced-comment': ['error', 'always', {
          line: { markers: ['/'], exceptions: ['-', '+'] },
          block: { balanced: true, markers: ['!'], exceptions: ['*'] },
        }], // 强制注释周围空格

        // Switch Colon Spacing Rules - switch冒号间距相关规则
        'style/switch-colon-spacing': ['error', { after: true, before: false }], // 强制switch冒号前后空格

        // Template Rules - 模板相关规则
        'style/template-curly-spacing': ['error', 'never'], // 强制模板字面量花括号内空格
        'style/template-tag-spacing': ['error', 'never'], // 强制模板标签空格

        // Type Rules - 类型相关规则
        'style/type-annotation-spacing': 'off', // 强制类型注解空格（关闭）
        'style/type-generic-spacing': 'off', // 强制类型泛型空格（关闭）
        'style/type-named-tuple-spacing': 'off', // 强制类型命名元组空格（关闭）

        // Wrap Rules - 包裹相关规则
        'style/wrap-iife': ['error', 'any'], // 要求IIFE使用括号包裹
        'style/wrap-regex': 'off', // 强制正则表达式换行（关闭）

        // Yield Star Spacing Rules - yield*星号间距相关规则
        'style/yield-star-spacing': ['error', { before: true, after: false }], // 强制yield*星号位置
      },
    },
  ];
}
