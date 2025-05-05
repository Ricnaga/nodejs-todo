module.exports = {
  '*.ts': [() => 'pnpm typecheck', 'pnpm lint:fix', 'pnpm test'],
  '*.{js,ts,json,cjs,mjs}': ['prettier --write'],
};
