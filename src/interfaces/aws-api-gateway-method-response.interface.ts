import { AwsApiGatewayMethodResponseArgsIntterface, AwsApiGatewayMethodResponseAttrsIntterface } from '.';

export interface AwsApiGatewayMethodResponseIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsApiGatewayMethodResponseArgsIntterface;
  attrs: AwsApiGatewayMethodResponseAttrsIntterface;

}
