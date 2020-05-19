import { AwsApiGatewayModelArgsIntterface, AwsApiGatewayModelAttrsIntterface } from '.';

export interface AwsApiGatewayModelIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsApiGatewayModelArgsIntterface;
	attrs: AwsApiGatewayModelAttrsIntterface;

}
