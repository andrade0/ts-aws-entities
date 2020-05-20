import { AwsApiGatewayAuthorizerIntterface } from '../interfaces';
import { AwsApiGatewayAuthorizerArgs, AwsApiGatewayAuthorizerAttrs } from '.';

export class AwsApiGatewayAuthorizer implements AwsApiGatewayAuthorizerIntterface {
  name: string = 'aws_api_gateway_authorizer';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayAuthorizerArgs;
  attrs: AwsApiGatewayAuthorizerAttrs;

}
