import { AwsApiGatewayIntegrationResponseArgsIntterface, AwsApiGatewayIntegrationResponseAttrsIntterface } from '.';

export interface AwsApiGatewayIntegrationResponseIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsApiGatewayIntegrationResponseArgsIntterface;
	attrs: AwsApiGatewayIntegrationResponseAttrsIntterface;

}
