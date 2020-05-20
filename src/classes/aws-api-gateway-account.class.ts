import { AwsApiGatewayAccountIntterface } from '../interfaces';
import { AwsApiGatewayAccountArgs, AwsApiGatewayAccountAttrs } from '.';

export class AwsApiGatewayAccount implements AwsApiGatewayAccountIntterface {
  name: string = 'aws_api_gateway_account';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayAccountArgs;
  attrs: AwsApiGatewayAccountAttrs;

}
