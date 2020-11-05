module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // Allow debugging statements in local dev environment
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Vue.js stylistic rules (auto-fixable)
    'vue/attribute-hyphenation': 'warn',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn',
    'vue/v-slot-style': 'warn',
    'vue/attributes-order': 'warn',
    'vue/order-in-components': 'warn',

    // Vue.js warnings (not fixable)
    'vue/this-in-template': 'warn',
    'vue/require-prop-types': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/no-boolean-default': 'warn',
    'vue/no-v-html': 'warn',
    'vue/component-tags-order': [
      'warn',
      {
        order: ['template', 'script', 'style'],
      },
    ],

    // Vue.js errors
    'vue/no-template-shadow': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: true,
      },
    ],
  },
}
