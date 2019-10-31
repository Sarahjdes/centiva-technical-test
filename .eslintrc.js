module.exports = {
	root: true,

	env: {
		node: true,
	},

	rules: {
		'no-tabs': 0,
		'guard-for-in': 0,
		'no-param-reassign': 0,
		'import/no-extraneous-dependencies': 0,
		'no-shadow': [
			2,
			{
				allow: ['state'],
			},
		],
		'class-methods-use-this': 0,
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'no-restricted-syntax': 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},

	overrides: {
		files: 'src/**/*.vue',
		rules: {
			'eol-last': 0,
			'no-trailing-spaces': 0,
			'vue/html-indent': ['error', 'tab', {
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			}],
		},
	},

	parserOptions: {
		parser: 'babel-eslint',
	},

	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
		'plugin:vue/recommended',
	],
};
