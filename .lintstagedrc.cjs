module.exports = {
  '*.ts': [() => 'pnpm typecheck', 'pnpm lint:fix'],
  '*.{js,ts,json}': ['prettier --write'],
};
