import { AwsApiGatewayModelIntterface } from '../interfaces';
import { AwsApiGatewayModelArgs,  AwsApiGatewayModelAttrs } from '.';

export class AwsApiGatewayModel implements AwsApiGatewayModelIntterface {
  	name: string = 'aws_api_gateway_model';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html';
	groupName: string = 'API Gateway Resources';
	args: AwsApiGatewayModelArgs;
	attrs: AwsApiGatewayModelAttrs;

}
