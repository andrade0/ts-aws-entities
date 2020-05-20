import { AwsAlbListenerArgsPortIntterface } from '.';

export interface AwsAlbListenerArgsIntterface {
  load_balancer_arn: string;
  port: AwsAlbListenerArgsPortIntterface;
  protocol?: string;
  ssl_policy?: string;
  certificate_arn?: string;
  default_action: string;

}
