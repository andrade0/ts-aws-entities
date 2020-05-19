import { AwsApiGatewayRestApiIntterface } from '../interfaces';
import { AwsApiGatewayRestApiArgs,  AwsApiGatewayRestApiAttrs } from '.';

export class AwsApiGatewayRestApi implements AwsApiGatewayRestApiIntterface {
  	name: string = 'aws_api_gateway_rest_api';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html';
	groupName: string = 'API Gateway Resources';
	args: AwsApiGatewayRestApiArgs;
	attrs: AwsApiGatewayRestApiAttrs;

}
