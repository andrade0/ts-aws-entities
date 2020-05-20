import {
  AwsEc2FleetArgsIdIntterface,
  AwsEc2FleetArgsLaunchTemplateConfigIntterface,
  AwsEc2FleetArgsOnDemandOptionsIntterface,
  AwsEc2FleetArgsSpotOptionsIntterface,
  AwsEc2FleetArgsTargetCapacitySpecificationIntterface,
} from '.';

export interface AwsEc2FleetArgsIntterface {
  launch_template_config: AwsEc2FleetArgsLaunchTemplateConfigIntterface;
  target_capacity_specification: AwsEc2FleetArgsTargetCapacitySpecificationIntterface;
  excess_capacity_termination_policy?: string;
  on_demand_options?: AwsEc2FleetArgsOnDemandOptionsIntterface;
  replace_unhealthy_instances?: string;
  spot_options?: AwsEc2FleetArgsSpotOptionsIntterface;
  tags?: string;
  terminate_instances?: string;
  terminate_instances_with_expiration?: string;
  type?: string;
  version: string;
  launch_template_id?: string;
  launch_template_name?: string;
  id: AwsEc2FleetArgsIdIntterface;

}
