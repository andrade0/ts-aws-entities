import { AwsApiGatewayMethodIntterface } from '../interfaces';
import { AwsApiGatewayMethodArgs, AwsApiGatewayMethodAttrs } from '.';

export class AwsApiGatewayMethod implements AwsApiGatewayMethodIntterface {
  name: string = 'aws_api_gateway_method';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayMethodArgs;
  attrs: AwsApiGatewayMethodAttrs;

}
