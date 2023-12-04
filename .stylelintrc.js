module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
  plugins: ['stylelint-order'],
  ignoreFiles: [
    'node_modules/**',
    // 'src/assets/fonts/**',
    // 'src/assets/style/reset.css',
    // 'src/assets/css/element-plus.scss',
  ],
  overrides: [],
  rules: {
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['extends', 'ignores', 'include', 'mixin', 'if', 'else', 'media', 'for'] },
    ],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
  },
};
