import APIStack from './APIStack';

export default function main(app) {
	// Set default runtime for all functions
	app.setDefaultFunctionProps({
		runtime: 'nodejs14.x',
	});

	new APIStack(app, 'my-stack');

	// Add more stacks
}
