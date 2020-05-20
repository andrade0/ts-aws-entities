import { AwsApiGatewayGatewayResponseIntterface } from '../interfaces';
import { AwsApiGatewayGatewayResponseArgs, AwsApiGatewayGatewayResponseAttrs } from '.';

export class AwsApiGatewayGatewayResponse implements AwsApiGatewayGatewayResponseIntterface {
  name: string = 'aws_api_gateway_gateway_response';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayGatewayResponseArgs;
  attrs: AwsApiGatewayGatewayResponseAttrs;

}
