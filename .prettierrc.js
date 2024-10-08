const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.js',
      options: {
        semi: true,
      },
    },
  ],
};

module.exports = config;
