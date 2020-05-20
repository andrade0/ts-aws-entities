import { AwsAlbListenerArgsIntterface } from '../interfaces';
import { AwsAlbListenerArgsPort } from '.';

export class AwsAlbListenerArgs implements AwsAlbListenerArgsIntterface {
  load_balancer_arn: string;
  port: AwsAlbListenerArgsPort;
  protocol?: string;
  ssl_policy?: string;
  certificate_arn?: string;
  default_action: string;

}
