import { AwsEc2FleetArgsIntterface } from '../interfaces';
import {
  AwsEc2FleetArgsId,
  AwsEc2FleetArgsLaunchTemplateConfig,
  AwsEc2FleetArgsOnDemandOptions,
  AwsEc2FleetArgsSpotOptions,
  AwsEc2FleetArgsTargetCapacitySpecification,
} from '.';

export class AwsEc2FleetArgs implements AwsEc2FleetArgsIntterface {
  launch_template_config: AwsEc2FleetArgsLaunchTemplateConfig;
  target_capacity_specification: AwsEc2FleetArgsTargetCapacitySpecification;
  excess_capacity_termination_policy?: string;
  on_demand_options?: AwsEc2FleetArgsOnDemandOptions;
  replace_unhealthy_instances?: string;
  spot_options?: AwsEc2FleetArgsSpotOptions;
  tags?: string;
  terminate_instances?: string;
  terminate_instances_with_expiration?: string;
  type?: string;
  version: string;
  launch_template_id?: string;
  launch_template_name?: string;
  id: AwsEc2FleetArgsId;

}
