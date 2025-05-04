const { FlatCompat } = require('@eslint/eslintrc');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');
// import tsParser from '@typescript-eslint/parser';
// import tsPlugin from '@typescript-eslint/eslint-plugin';
// import prettierPlugin from 'eslint-plugin-prettier';

const compat = new FlatCompat();

module.exports = [
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: 'tsconfig.json',
				tsconfigRootDir: __dirname,
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			...prettierPlugin.configs.recommended.rules,
			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		files: ['**/*.js'],
		ignores: ['.eslintrc.js'],
	},
	{
		settings: {
			root: true,
			env: {
				node: true,
				jest: true,
			},
		},
	},
];
