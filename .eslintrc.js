module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  },
  rules: {
    'accessor-pairs': 2,
    'block-scoped-var': 2,
    'callback-return': 0,
    camelcase: 2,
    complexity: 0,
    'consistent-return': 0,
    'consistent-this': [2, 'self'],
    'constructor-super': 2,
    curly: 2,
    'default-case': 2,
    'dot-notation': 2,
    'eol-last': 0,
    eqeqeq: 2,
    'func-names': [2, 'never'],
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    'guard-for-in': 2,
    'handle-callback-err': 0,
    'id-length': 0,
    'id-match': 0,
    indent: [0, 4],
    'init-declarations': 0,
    'linebreak-style': 0,
    'lines-around-comment': 0,
    'max-depth': 0,
    'max-len': 0,
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'new-cap': [2, { properties: false }],
    'newline-after-var': 1,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-catch-shadow': 0,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-continue': 2,
    'no-control-regex': 2,
    'no-delete-var': 2,
    'no-div-regex': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-else-return': 0,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-invalid-this': 2,
    'no-irregular-whitespace': 1,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-mixed-requires': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-obj-calls': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': 0,
    'no-path-concat': 2,
    'no-plusplus': 0,
    'no-process-env': 0,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-modules': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 0,
    'no-shadow': 2,
    'no-sparse-arrays': 2,
    'no-sync': 2,
    'no-ternary': 0,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 0,
    'no-underscore-dangle': 2,
    'no-unexpected-multiline': 2,
    'no-unneeded-ternary': 0,
    'no-unreachable': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-useless-call': 2,
    'no-var': 0,
    'no-void': 0,
    'no-warning-comments': 1,
    'no-with': 2,
    'object-shorthand': 0,
    'one-var': 0,
    'operator-assignment': 2,
    'prefer-const': 2,
    'prefer-spread': 0,
    radix: 2,
    'require-yield': 2,
    'sort-vars': 0,
    'space-return-throw-case': 0,
    'spaced-comment': 1,
    strict: [2, 'function'],
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'vars-on-top': 2,
    yoda: 2,
    'no-console': 2,
    'no-debugger': 2,
    'prettier/prettier': 2,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: [
        ['~components', './src/components'],
        ['~pages', './src/pages'],
        ['~images', './src/images']
      ]
    }
  }
};
