import { AwsApiGatewayAccountArgsIntterface, AwsApiGatewayAccountAttrsIntterface } from '.';

export interface AwsApiGatewayAccountIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsApiGatewayAccountArgsIntterface;
	attrs: AwsApiGatewayAccountAttrsIntterface;

}
