import { AwsApiGatewayStageIntterface } from '../interfaces';
import { AwsApiGatewayStageArgs,  AwsApiGatewayStageAttrs } from '.';

export class AwsApiGatewayStage implements AwsApiGatewayStageIntterface {
  	name: string = 'aws_api_gateway_stage';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html';
	groupName: string = 'API Gateway Resources';
	args: AwsApiGatewayStageArgs;
	attrs: AwsApiGatewayStageAttrs;

}
