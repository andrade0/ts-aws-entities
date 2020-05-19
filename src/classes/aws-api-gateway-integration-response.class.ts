import { AwsApiGatewayIntegrationResponseIntterface } from '../interfaces';
import { AwsApiGatewayIntegrationResponseArgs,  AwsApiGatewayIntegrationResponseAttrs } from '.';

export class AwsApiGatewayIntegrationResponse implements AwsApiGatewayIntegrationResponseIntterface {
  	name: string = 'aws_api_gateway_integration_response';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html';
	groupName: string = 'API Gateway Resources';
	args: AwsApiGatewayIntegrationResponseArgs;
	attrs: AwsApiGatewayIntegrationResponseAttrs;

}
