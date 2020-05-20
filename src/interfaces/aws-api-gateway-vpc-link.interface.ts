import { AwsApiGatewayVpcLinkArgsIntterface, AwsApiGatewayVpcLinkAttrsIntterface } from '.';

export interface AwsApiGatewayVpcLinkIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsApiGatewayVpcLinkArgsIntterface;
  attrs: AwsApiGatewayVpcLinkAttrsIntterface;

}
