import { LayerVersion } from 'aws-cdk-lib/aws-lambda';
import { Stack, Api } from '@serverless-stack/resources';

const layerARN =
	'arn:aws:lambda:ap-southeast-1:764866452798:layer:chrome-aws-lambda:25';

class APIStack extends Stack {
	constructor(scope, id, props) {
		super(scope, id, props);

		const layer = LayerVersion.fromLayerVersionArn(this, 'Layer', layerARN);

		const api = new Api(this, 'Api', {
			routes: {
				'GET /': {
					function: {
						handler: 'src/lambda.handler',
						timeout: 30,
						layers: [layer],
						bundle: {
							externalModules: ['chrome-aws-lambda'],
						},
					},
				},
			},
		});

		this.addOutputs({
			ApiEndpoint: api.url,
		});
	}
}

export default APIStack;
