import { AwsLaunchTemplateArgsBlockDeviceMappingsIntterface, AwsLaunchTemplateArgsCapacityReservationSpecificationIntterface, AwsLaunchTemplateArgsCreditSpecificationIntterface, AwsLaunchTemplateArgsElasticGpuSpecificationsIntterface, AwsLaunchTemplateArgsIamInstanceProfileIntterface, AwsLaunchTemplateArgsInstanceMarketOptionsIntterface, AwsLaunchTemplateArgsLicenseSpecificationIntterface, AwsLaunchTemplateArgsMonitoringIntterface, AwsLaunchTemplateArgsNetworkInterfacesIntterface, AwsLaunchTemplateArgsPlacementIntterface, AwsLaunchTemplateArgsTagSpecificationsIntterface } from '.';

export interface AwsLaunchTemplateArgsIntterface {
  	name: string;
	name_prefix: string;
	description: string;
	block_device_mappings: AwsLaunchTemplateArgsBlockDeviceMappingsIntterface;
	capacity_reservation_specification: AwsLaunchTemplateArgsCapacityReservationSpecificationIntterface;
	credit_specification: AwsLaunchTemplateArgsCreditSpecificationIntterface;
	disable_api_termination: string;
	ebs_optimized: string;
	elastic_gpu_specifications: AwsLaunchTemplateArgsElasticGpuSpecificationsIntterface;
	iam_instance_profile: AwsLaunchTemplateArgsIamInstanceProfileIntterface;
	image_id: string;
	instance_initiated_shutdown_behavior: string;
	instance_market_options: AwsLaunchTemplateArgsInstanceMarketOptionsIntterface;
	instance_type: string;
	kernel_id: string;
	key_name: string;
	license_specification: AwsLaunchTemplateArgsLicenseSpecificationIntterface;
	monitoring: AwsLaunchTemplateArgsMonitoringIntterface;
	network_interfaces: AwsLaunchTemplateArgsNetworkInterfacesIntterface;
	placement: AwsLaunchTemplateArgsPlacementIntterface;
	ram_disk_id: string;
	security_group_names: string;
	vpc_security_group_ids: string;
	tag_specifications: AwsLaunchTemplateArgsTagSpecificationsIntterface;
	tags?: string;
	user_data: string;
	delete_on_termination: string;
	encrypted: string;
	iops: string;
	kms_key_id: string;
	snapshot_id: string;
	volume_size: string;
	volume_type: string;
	capacity_reservation_id: string;
	block_duration_minutes: string;
	instance_interruption_behavior: string;
	max_price: string;
	spot_instance_type: string;
	valid_until: string;

}
