import { AwsAutoscalingGroupArgsIntterface } from '../interfaces';
import {
  AwsAutoscalingGroupArgsLaunchTemplate,
  AwsAutoscalingGroupArgsMixedInstancesPolicy,
  AwsAutoscalingGroupArgsTag,
} from '.';

export class AwsAutoscalingGroupArgs implements AwsAutoscalingGroupArgsIntterface {
  name?: string;
  name_prefix?: string;
  max_size: string;
  min_size: string;
  availability_zones: string;
  default_cooldown?: string;
  launch_configuration?: string;
  launch_template?: AwsAutoscalingGroupArgsLaunchTemplate;
  mixed_instances_policy?: AwsAutoscalingGroupArgsMixedInstancesPolicy;
  initial_lifecycle_hook?: string;
  health_check_grace_period: string;
  health_check_type?: string;
  desired_capacity?: string;
  force_delete?: string;
  load_balancers?: string;
  vpc_zone_identifier?: string;
  target_group_arns?: string;
  termination_policies?: string;
  suspended_processes?: string;
  tag?: AwsAutoscalingGroupArgsTag;
  tags?: string;
  placement_group?: string;
  metrics_granularity?: string;
  enabled_metrics?: string;
  wait_for_capacity_timeout: string;
  min_elb_capacity?: string;
  wait_for_elb_capacity?: string;
  protect_from_scale_in?: string;
  service_linked_role_arn?: string;
  on_demand_allocation_strategy?: string;
  on_demand_base_capacity?: string;
  on_demand_percentage_above_base_capacity?: string;
  spot_allocation_strategy?: string;
  spot_instance_pools?: number;
  spot_max_price?: string;
  launch_template_specification: string;
  override?: string;
  launch_template_id?: string;
  launch_template_name?: string;
  version?: string;
  instance_type?: string;

}
