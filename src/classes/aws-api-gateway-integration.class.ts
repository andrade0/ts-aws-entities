import { AwsApiGatewayIntegrationIntterface } from '../interfaces';
import { AwsApiGatewayIntegrationArgs, AwsApiGatewayIntegrationAttrs } from '.';

export class AwsApiGatewayIntegration implements AwsApiGatewayIntegrationIntterface {
  name: string = 'aws_api_gateway_integration';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayIntegrationArgs;
  attrs: AwsApiGatewayIntegrationAttrs;

}
