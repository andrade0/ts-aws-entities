import { AwsOpsworksRailsAppLayerArgsEbsVolumeIntterface, AwsOpsworksRailsAppLayerArgsNameIntterface } from '.';

export interface AwsOpsworksRailsAppLayerArgsIntterface {
  stack_id: string;
  name?: AwsOpsworksRailsAppLayerArgsNameIntterface;
  app_server?: string;
  auto_assign_elastic_ips?: string;
  auto_assign_public_ips?: string;
  bundler_version?: string;
  custom_instance_profile_arn?: string;
  custom_security_group_ids?: string;
  auto_healing?: string;
  install_updates_on_boot?: string;
  instance_shutdown_timeout?: string;
  elastic_load_balancer?: string;
  drain_elb_on_shutdown?: string;
  manage_bundler?: string;
  passenger_version?: string;
  ruby_version?: string;
  rubygems_version?: string;
  system_packages?: string;
  use_ebs_optimized_instances?: string;
  ebs_volume?: AwsOpsworksRailsAppLayerArgsEbsVolumeIntterface;
  custom_json?: string;

}
