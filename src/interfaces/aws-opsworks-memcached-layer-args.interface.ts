import { AwsOpsworksMemcachedLayerArgsEbsVolumeIntterface, AwsOpsworksMemcachedLayerArgsNameIntterface } from '.';

export interface AwsOpsworksMemcachedLayerArgsIntterface {
  stack_id: string;
  name?: AwsOpsworksMemcachedLayerArgsNameIntterface;
  allocated_memory?: string;
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
  ebs_volume?: AwsOpsworksMemcachedLayerArgsEbsVolumeIntterface;
  custom_json?: string;

}
