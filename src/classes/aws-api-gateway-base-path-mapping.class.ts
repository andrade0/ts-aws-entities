import { AwsApiGatewayBasePathMappingIntterface } from '../interfaces';
import { AwsApiGatewayBasePathMappingArgs, AwsApiGatewayBasePathMappingAttrs } from '.';

export class AwsApiGatewayBasePathMapping implements AwsApiGatewayBasePathMappingIntterface {
  name: string = 'aws_api_gateway_base_path_mapping';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayBasePathMappingArgs;
  attrs: AwsApiGatewayBasePathMappingAttrs;

}
