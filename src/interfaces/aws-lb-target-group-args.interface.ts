import { AwsLbTargetGroupArgsPortIntterface, AwsLbTargetGroupArgsProtocolIntterface } from '.';

export interface AwsLbTargetGroupArgsIntterface {
  name: string;
  name_prefix: string;
  port: AwsLbTargetGroupArgsPortIntterface;
  protocol: AwsLbTargetGroupArgsProtocolIntterface;
  vpc_id: string;
  deregistration_delay?: string;
  slow_start?: string;
  proxy_protocol_v2?: boolean;
  stickiness?: string;
  health_check?: string;
  target_type: string;
  tags?: string;

}
