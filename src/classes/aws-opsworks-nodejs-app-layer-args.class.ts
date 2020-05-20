import { AwsOpsworksNodejsAppLayerArgsIntterface } from '../interfaces';
import { AwsOpsworksNodejsAppLayerArgsEbsVolume, AwsOpsworksNodejsAppLayerArgsName } from '.';

export class AwsOpsworksNodejsAppLayerArgs implements AwsOpsworksNodejsAppLayerArgsIntterface {
  stack_id: string;
  name?: AwsOpsworksNodejsAppLayerArgsName;
  auto_assign_elastic_ips?: string;
  auto_assign_public_ips?: string;
  custom_instance_profile_arn?: string;
  custom_security_group_ids?: string;
  auto_healing?: string;
  install_updates_on_boot?: string;
  instance_shutdown_timeout?: string;
  elastic_load_balancer?: string;
  drain_elb_on_shutdown?: string;
  nodejs_version?: string;
  system_packages?: string;
  use_ebs_optimized_instances?: string;
  ebs_volume?: AwsOpsworksNodejsAppLayerArgsEbsVolume;
  custom_json?: string;

}
