import { AwsOpsworksCustomLayerArgsNameIntterface, AwsOpsworksCustomLayerArgsEbsVolumeIntterface } from '.';

export interface AwsOpsworksCustomLayerArgsIntterface {
  	name: AwsOpsworksCustomLayerArgsNameIntterface;
	short_name: string;
	stack_id: string;
	auto_assign_elastic_ips?: string;
	auto_assign_public_ips?: string;
	custom_instance_profile_arn?: string;
	custom_security_group_ids?: string;
	auto_healing?: string;
	install_updates_on_boot?: string;
	instance_shutdown_timeout?: string;
	elastic_load_balancer?: string;
	drain_elb_on_shutdown?: string;
	system_packages?: string;
	use_ebs_optimized_instances?: string;
	ebs_volume?: AwsOpsworksCustomLayerArgsEbsVolumeIntterface;
	custom_json?: string;

}
