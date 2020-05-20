import { AwsLaunchTemplateArgsIntterface } from '../interfaces';
import {
  AwsLaunchTemplateArgsBlockDeviceMappings,
  AwsLaunchTemplateArgsCapacityReservationSpecification,
  AwsLaunchTemplateArgsCreditSpecification,
  AwsLaunchTemplateArgsElasticGpuSpecifications,
  AwsLaunchTemplateArgsIamInstanceProfile,
  AwsLaunchTemplateArgsInstanceMarketOptions,
  AwsLaunchTemplateArgsLicenseSpecification,
  AwsLaunchTemplateArgsMonitoring,
  AwsLaunchTemplateArgsNetworkInterfaces,
  AwsLaunchTemplateArgsPlacement,
  AwsLaunchTemplateArgsTagSpecifications,
} from '.';

export class AwsLaunchTemplateArgs implements AwsLaunchTemplateArgsIntterface {
  name: string;
  name_prefix: string;
  description: string;
  block_device_mappings: AwsLaunchTemplateArgsBlockDeviceMappings;
  capacity_reservation_specification: AwsLaunchTemplateArgsCapacityReservationSpecification;
  credit_specification: AwsLaunchTemplateArgsCreditSpecification;
  disable_api_termination: string;
  ebs_optimized: string;
  elastic_gpu_specifications: AwsLaunchTemplateArgsElasticGpuSpecifications;
  iam_instance_profile: AwsLaunchTemplateArgsIamInstanceProfile;
  image_id: string;
  instance_initiated_shutdown_behavior: string;
  instance_market_options: AwsLaunchTemplateArgsInstanceMarketOptions;
  instance_type: string;
  kernel_id: string;
  key_name: string;
  license_specification: AwsLaunchTemplateArgsLicenseSpecification;
  monitoring: AwsLaunchTemplateArgsMonitoring;
  network_interfaces: AwsLaunchTemplateArgsNetworkInterfaces;
  placement: AwsLaunchTemplateArgsPlacement;
  ram_disk_id: string;
  security_group_names: string;
  vpc_security_group_ids: string;
  tag_specifications: AwsLaunchTemplateArgsTagSpecifications;
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
