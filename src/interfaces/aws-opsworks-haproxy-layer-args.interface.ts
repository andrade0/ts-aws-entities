import { AwsOpsworksHaproxyLayerArgsEbsVolumeIntterface, AwsOpsworksHaproxyLayerArgsNameIntterface } from '.';

export interface AwsOpsworksHaproxyLayerArgsIntterface {
  stack_id: string;
  stats_password: string;
  name?: AwsOpsworksHaproxyLayerArgsNameIntterface;
  auto_assign_elastic_ips?: string;
  auto_assign_public_ips?: string;
  custom_instance_profile_arn?: string;
  custom_security_group_ids?: string;
  auto_healing?: string;
  healthcheck_method?: string;
  healthcheck_url?: string;
  install_updates_on_boot?: string;
  instance_shutdown_timeout?: string;
  elastic_load_balancer?: string;
  drain_elb_on_shutdown?: string;
  stats_enabled?: string;
  stats_url?: string;
  stats_user?: string;
  system_packages?: string;
  use_ebs_optimized_instances?: string;
  ebs_volume?: AwsOpsworksHaproxyLayerArgsEbsVolumeIntterface;
  custom_json?: string;

}
