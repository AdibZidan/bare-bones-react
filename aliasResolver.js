const { resolve } = require('path');

const aliasResolver = () => {
  const tsconfigPath = './tsconfig.paths.json';
  const { paths } = require(tsconfigPath).compilerOptions;
  const aliases = {};

  if (paths) {
    Object.keys(paths).forEach((path) => {
      const key = path.replace('/*', '');
      const src = paths[path][0].replace('/*', '').replace('*', '');

      aliases[key] = resolve(__dirname, src);
    });
  }

  return aliases;
};

module.exports = aliasResolver;
