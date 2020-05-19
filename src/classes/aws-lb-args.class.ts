import { AwsLbArgsIntterface } from '../interfaces';
import { AwsLbArgsAccessLogs,  AwsLbArgsSubnetMapping } from '.';

export class AwsLbArgs implements AwsLbArgsIntterface {
  	name?: string;
	name_prefix?: string;
	internal?: string;
	load_balancer_type?: string;
	security_groups?: string;
	access_logs?: AwsLbArgsAccessLogs;
	subnets?: string;
	subnet_mapping?: AwsLbArgsSubnetMapping;
	idle_timeout?: string;
	enable_deletion_protection?: string;
	enable_cross_zone_load_balancing?: string;
	enable_http2?: string;
	ip_address_type?: string;
	tags?: string;

}
