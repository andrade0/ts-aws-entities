import { AwsApiGatewayMethodSettingsIntterface } from '../interfaces';
import { AwsApiGatewayMethodSettingsArgs, AwsApiGatewayMethodSettingsAttrs } from '.';

export class AwsApiGatewayMethodSettings implements AwsApiGatewayMethodSettingsIntterface {
  name: string = 'aws_api_gateway_method_settings';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayMethodSettingsArgs;
  attrs: AwsApiGatewayMethodSettingsAttrs;

}
