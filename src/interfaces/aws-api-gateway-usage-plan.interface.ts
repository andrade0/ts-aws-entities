import { AwsApiGatewayUsagePlanArgsIntterface, AwsApiGatewayUsagePlanAttrsIntterface } from '.';

export interface AwsApiGatewayUsagePlanIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsApiGatewayUsagePlanArgsIntterface;
  attrs: AwsApiGatewayUsagePlanAttrsIntterface;

}
