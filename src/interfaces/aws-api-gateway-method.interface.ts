import { AwsApiGatewayMethodArgsIntterface, AwsApiGatewayMethodAttrsIntterface } from '.';

export interface AwsApiGatewayMethodIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsApiGatewayMethodArgsIntterface;
  attrs: AwsApiGatewayMethodAttrsIntterface;

}
