import { AwsAlbTargetGroupArgsIntterface } from '../interfaces';
import { AwsAlbTargetGroupArgsPort, AwsAlbTargetGroupArgsProtocol } from '.';

export class AwsAlbTargetGroupArgs implements AwsAlbTargetGroupArgsIntterface {
  name: string;
  name_prefix: string;
  port: AwsAlbTargetGroupArgsPort;
  protocol: AwsAlbTargetGroupArgsProtocol;
  vpc_id: string;
  deregistration_delay?: string;
  slow_start?: string;
  proxy_protocol_v2?: boolean;
  stickiness?: string;
  health_check?: string;
  target_type: string;
  tags?: string;

}
