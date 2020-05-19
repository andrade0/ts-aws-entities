import { AwsApiGatewayUsagePlanIntterface } from '../interfaces';
import { AwsApiGatewayUsagePlanArgs,  AwsApiGatewayUsagePlanAttrs } from '.';

export class AwsApiGatewayUsagePlan implements AwsApiGatewayUsagePlanIntterface {
  	name: string = 'aws_api_gateway_usage_plan';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html';
	groupName: string = 'API Gateway Resources';
	args: AwsApiGatewayUsagePlanArgs;
	attrs: AwsApiGatewayUsagePlanAttrs;

}
