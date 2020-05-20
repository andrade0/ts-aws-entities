import { AwsApiGatewayRequestValidatorIntterface } from '../interfaces';
import { AwsApiGatewayRequestValidatorArgs, AwsApiGatewayRequestValidatorAttrs } from '.';

export class AwsApiGatewayRequestValidator implements AwsApiGatewayRequestValidatorIntterface {
  name: string = 'aws_api_gateway_request_validator';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayRequestValidatorArgs;
  attrs: AwsApiGatewayRequestValidatorAttrs;

}
