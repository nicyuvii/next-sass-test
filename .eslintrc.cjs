module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      alias: {
        map: [
          ['utils', './src/utils'],
          ['services', './src/services'],
          ['pages', './src/pages'],
          ['state', './src/state'],
          ['components', './src/components'],
          ['assets', './src/assets'],
          ['constants', './src/constants'],
          ['types', './src/types'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', '**/node_modules/**/*.js'],
  rules: {
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
    semi: 'off',
    quotes: ['error', 'single'],
    camelcase: 'off',
    'react/jsx-no-useless-fragment': 'warn',
    'no-undef': 'off', // checks are already provided by ts
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'no-new': 'off',
    'no-underscore-dangle': 'off',
    'no-empty-function': 'off',
    'import/extensions': 'off',
    'max-classes-per-file': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': [
      'error',
      'WithStatement',
      "BinaryExpression[operator='in']",
      'LabeledStatement',
    ],
    'no-unused-vars': ['warn'],
    'react/destructuring-assignment': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': 'off',
    'func-names': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', // we do not use prop-types
    'react/require-default-props': 'off', // we do not use prop-types
    'react/jsx-uses-react': 'off', // not needed with eslint-plugin-react
    'react/react-in-jsx-scope': 'off', // not needed with eslint-plugin-react
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        endOfLine: 'lf',
        arrowParens: 'always',
      },
    ],
  },
}
