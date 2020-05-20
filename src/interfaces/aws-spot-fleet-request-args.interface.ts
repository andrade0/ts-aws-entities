export interface AwsSpotFleetRequestArgsIntterface {
  iam_fleet_role: string;
  replace_unhealthy_instances?: string;
  launch_specification: string;
  spot_price: string;
  wait_for_fulfillment: string;
  target_capacity: string;
  allocation_strategy: string;
  instance_pools_to_use_count: string;
  excess_capacity_termination_policy: string;
  terminate_instances_with_expiration: string;
  instance_interruption_behaviour?: string;
  fleet_type?: string;
  valid_until?: string;
  valid_from?: string;
  load_balancers?: string;
  target_group_arns?: string;
  tags?: string;
  create: string;
  delete: string;

}
