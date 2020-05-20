import { AwsApiGatewayMethodResponseIntterface } from '../interfaces';
import { AwsApiGatewayMethodResponseArgs, AwsApiGatewayMethodResponseAttrs } from '.';

export class AwsApiGatewayMethodResponse implements AwsApiGatewayMethodResponseIntterface {
  name: string = 'aws_api_gateway_method_response';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayMethodResponseArgs;
  attrs: AwsApiGatewayMethodResponseAttrs;

}
