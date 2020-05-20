import { AwsApiGatewayStageArgsIntterface, AwsApiGatewayStageAttrsIntterface } from '.';

export interface AwsApiGatewayStageIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsApiGatewayStageArgsIntterface;
  attrs: AwsApiGatewayStageAttrsIntterface;

}
