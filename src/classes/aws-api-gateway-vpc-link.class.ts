import { AwsApiGatewayVpcLinkIntterface } from '../interfaces';
import { AwsApiGatewayVpcLinkArgs, AwsApiGatewayVpcLinkAttrs } from '.';

export class AwsApiGatewayVpcLink implements AwsApiGatewayVpcLinkIntterface {
  name: string = 'aws_api_gateway_vpc_link';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayVpcLinkArgs;
  attrs: AwsApiGatewayVpcLinkAttrs;

}
