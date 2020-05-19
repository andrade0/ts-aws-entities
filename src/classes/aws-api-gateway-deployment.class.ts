import { AwsApiGatewayDeploymentIntterface } from '../interfaces';
import { AwsApiGatewayDeploymentArgs,  AwsApiGatewayDeploymentAttrs } from '.';

export class AwsApiGatewayDeployment implements AwsApiGatewayDeploymentIntterface {
  	name: string = 'aws_api_gateway_deployment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html';
	groupName: string = 'API Gateway Resources';
	args: AwsApiGatewayDeploymentArgs;
	attrs: AwsApiGatewayDeploymentAttrs;

}
