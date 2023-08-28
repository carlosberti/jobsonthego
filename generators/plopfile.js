module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'application component logic',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name please',
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: 'templates/component.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
				templateFile: 'templates/test.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.tsx',
				templateFile: 'templates/index.tsx.hbs',
			},
		],
	});
};
