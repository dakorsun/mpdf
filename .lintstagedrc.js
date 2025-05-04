module.exports = {
	'*.{ts}': ['pnpx eslint --fix'],
	'*.{js,ts,json,md,yaml,yml}': ['pnpx prettier --write'],
};
