import { AwsApiGatewayResourceIntterface } from '../interfaces';
import { AwsApiGatewayResourceArgs, AwsApiGatewayResourceAttrs } from '.';

export class AwsApiGatewayResource implements AwsApiGatewayResourceIntterface {
  name: string = 'aws_api_gateway_resource';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayResourceArgs;
  attrs: AwsApiGatewayResourceAttrs;

}
