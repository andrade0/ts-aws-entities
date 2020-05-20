import { AwsApiGatewayApiKeyIntterface } from '../interfaces';
import { AwsApiGatewayApiKeyArgs, AwsApiGatewayApiKeyAttrs } from '.';

export class AwsApiGatewayApiKey implements AwsApiGatewayApiKeyIntterface {
  name: string = 'aws_api_gateway_api_key';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayApiKeyArgs;
  attrs: AwsApiGatewayApiKeyAttrs;

}
