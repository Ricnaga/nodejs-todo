module.exports = {
  '*.ts': [() => 'pnpm typecheck', 'pnpm lint:fix'],
  '*.{js,ts,json,cjs,mjs}': ['prettier --write'],
};
