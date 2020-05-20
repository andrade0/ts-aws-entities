import { AwsLbListenerArgsIntterface } from '../interfaces';
import { AwsLbListenerArgsPort } from '.';

export class AwsLbListenerArgs implements AwsLbListenerArgsIntterface {
  load_balancer_arn: string;
  port: AwsLbListenerArgsPort;
  protocol?: string;
  ssl_policy?: string;
  certificate_arn?: string;
  default_action: string;

}
