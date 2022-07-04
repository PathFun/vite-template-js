module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    amd: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    test: true,
    expect: true
  },
  extends: 'eslint:recommended',
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        printWidth: 120
      }
    ],
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    'linkbreak-style': ['off', 'windows']
  }
};
