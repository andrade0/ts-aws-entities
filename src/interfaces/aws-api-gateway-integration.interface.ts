import { AwsApiGatewayIntegrationArgsIntterface, AwsApiGatewayIntegrationAttrsIntterface } from '.';

export interface AwsApiGatewayIntegrationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsApiGatewayIntegrationArgsIntterface;
	attrs: AwsApiGatewayIntegrationAttrsIntterface;

}
