import { AwsLbTargetGroupArgsIntterface } from '../interfaces';
import { AwsLbTargetGroupArgsPort,  AwsLbTargetGroupArgsProtocol } from '.';

export class AwsLbTargetGroupArgs implements AwsLbTargetGroupArgsIntterface {
  	name: string;
	name_prefix: string;
	port: AwsLbTargetGroupArgsPort;
	protocol: AwsLbTargetGroupArgsProtocol;
	vpc_id: string;
	deregistration_delay?: string;
	slow_start?: string;
	proxy_protocol_v2?: boolean;
	stickiness?: string;
	health_check?: string;
	target_type: string;
	tags?: string;

}
