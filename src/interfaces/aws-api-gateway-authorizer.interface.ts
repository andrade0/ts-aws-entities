import { AwsApiGatewayAuthorizerArgsIntterface, AwsApiGatewayAuthorizerAttrsIntterface } from '.';

export interface AwsApiGatewayAuthorizerIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsApiGatewayAuthorizerArgsIntterface;
  attrs: AwsApiGatewayAuthorizerAttrsIntterface;

}
