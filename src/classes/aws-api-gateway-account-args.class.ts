import { AwsApiGatewayAccountArgsIntterface } from '../interfaces';
import { AwsApiGatewayAccountArgsThrottleSettings } from '.';

export class AwsApiGatewayAccountArgs implements AwsApiGatewayAccountArgsIntterface {
  cloudwatch_role_arn?: string;
  throttle_settings: AwsApiGatewayAccountArgsThrottleSettings;

}
