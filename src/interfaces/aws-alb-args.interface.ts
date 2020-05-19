import { AwsAlbArgsAccessLogsIntterface, AwsAlbArgsSubnetMappingIntterface } from '.';

export interface AwsAlbArgsIntterface {
  	name?: string;
	name_prefix?: string;
	internal?: string;
	load_balancer_type?: string;
	security_groups?: string;
	access_logs?: AwsAlbArgsAccessLogsIntterface;
	subnets?: string;
	subnet_mapping?: AwsAlbArgsSubnetMappingIntterface;
	idle_timeout?: string;
	enable_deletion_protection?: string;
	enable_cross_zone_load_balancing?: string;
	enable_http2?: string;
	ip_address_type?: string;
	tags?: string;

}
