import { AwsApiGatewayRequestValidatorArgsIntterface, AwsApiGatewayRequestValidatorAttrsIntterface } from '.';

export interface AwsApiGatewayRequestValidatorIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsApiGatewayRequestValidatorArgsIntterface;
  attrs: AwsApiGatewayRequestValidatorAttrsIntterface;

}
