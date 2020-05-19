import { AwsApiGatewayResourceArgsIntterface, AwsApiGatewayResourceAttrsIntterface } from '.';

export interface AwsApiGatewayResourceIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsApiGatewayResourceArgsIntterface;
	attrs: AwsApiGatewayResourceAttrsIntterface;

}
