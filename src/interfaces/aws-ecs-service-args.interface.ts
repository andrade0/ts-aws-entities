import {
  AwsEcsServiceArgsDeploymentControllerIntterface,
  AwsEcsServiceArgsLoadBalancerIntterface,
  AwsEcsServiceArgsNetworkConfigurationIntterface,
  AwsEcsServiceArgsPlacementConstraintsIntterface,
  AwsEcsServiceArgsPlacementStrategyIntterface,
  AwsEcsServiceArgsServiceRegistriesIntterface,
} from '.';

export interface AwsEcsServiceArgsIntterface {
  name: string;
  task_definition: string;
  desired_count?: string;
  launch_type?: string;
  platform_version?: string;
  scheduling_strategy?: string;
  cluster?: string;
  iam_role?: string;
  deployment_controller?: AwsEcsServiceArgsDeploymentControllerIntterface;
  deployment_maximum_percent?: string;
  deployment_minimum_healthy_percent?: string;
  enable_ecs_managed_tags?: string;
  propagate_tags?: string;
  placement_strategy?: AwsEcsServiceArgsPlacementStrategyIntterface;
  ordered_placement_strategy?: string;
  health_check_grace_period_seconds?: string;
  load_balancer?: AwsEcsServiceArgsLoadBalancerIntterface;
  placement_constraints?: AwsEcsServiceArgsPlacementConstraintsIntterface;
  network_configuration?: AwsEcsServiceArgsNetworkConfigurationIntterface;
  service_registries?: AwsEcsServiceArgsServiceRegistriesIntterface;
  tags?: string;

}
