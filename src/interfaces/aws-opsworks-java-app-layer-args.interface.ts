import { AwsOpsworksJavaAppLayerArgsNameIntterface, AwsOpsworksJavaAppLayerArgsEbsVolumeIntterface } from '.';

export interface AwsOpsworksJavaAppLayerArgsIntterface {
  	stack_id: string;
	name?: AwsOpsworksJavaAppLayerArgsNameIntterface;
	app_server?: string;
	app_server_version?: string;
	auto_assign_elastic_ips?: string;
	auto_assign_public_ips?: string;
	custom_instance_profile_arn?: string;
	custom_security_group_ids?: string;
	auto_healing?: string;
	install_updates_on_boot?: string;
	instance_shutdown_timeout?: string;
	jvm_type?: string;
	jvm_options?: string;
	jvm_version?: string;
	elastic_load_balancer?: string;
	drain_elb_on_shutdown?: string;
	system_packages?: string;
	use_ebs_optimized_instances?: string;
	ebs_volume?: AwsOpsworksJavaAppLayerArgsEbsVolumeIntterface;
	custom_json?: string;

}
