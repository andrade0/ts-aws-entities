import { AwsAlbTargetGroupArgsPortIntterface, AwsAlbTargetGroupArgsProtocolIntterface } from '.';

export interface AwsAlbTargetGroupArgsIntterface {
  	name: string;
	name_prefix: string;
	port: AwsAlbTargetGroupArgsPortIntterface;
	protocol: AwsAlbTargetGroupArgsProtocolIntterface;
	vpc_id: string;
	deregistration_delay?: string;
	slow_start?: string;
	proxy_protocol_v2?: boolean;
	stickiness?: string;
	health_check?: string;
	target_type: string;
	tags?: string;

}
