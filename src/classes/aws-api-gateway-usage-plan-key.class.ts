import { AwsApiGatewayUsagePlanKeyIntterface } from '../interfaces';
import { AwsApiGatewayUsagePlanKeyArgs, AwsApiGatewayUsagePlanKeyAttrs } from '.';

export class AwsApiGatewayUsagePlanKey implements AwsApiGatewayUsagePlanKeyIntterface {
  name: string = 'aws_api_gateway_usage_plan_key';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayUsagePlanKeyArgs;
  attrs: AwsApiGatewayUsagePlanKeyAttrs;

}
