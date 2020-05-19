import { AwsEcsServiceArgsIntterface } from '../interfaces';
import { AwsEcsServiceArgsDeploymentController,  AwsEcsServiceArgsPlacementStrategy,  AwsEcsServiceArgsLoadBalancer,  AwsEcsServiceArgsPlacementConstraints,  AwsEcsServiceArgsNetworkConfiguration,  AwsEcsServiceArgsServiceRegistries } from '.';

export class AwsEcsServiceArgs implements AwsEcsServiceArgsIntterface {
  	name: string;
	task_definition: string;
	desired_count?: string;
	launch_type?: string;
	platform_version?: string;
	scheduling_strategy?: string;
	cluster?: string;
	iam_role?: string;
	deployment_controller?: AwsEcsServiceArgsDeploymentController;
	deployment_maximum_percent?: string;
	deployment_minimum_healthy_percent?: string;
	enable_ecs_managed_tags?: string;
	propagate_tags?: string;
	placement_strategy?: AwsEcsServiceArgsPlacementStrategy;
	ordered_placement_strategy?: string;
	health_check_grace_period_seconds?: string;
	load_balancer?: AwsEcsServiceArgsLoadBalancer;
	placement_constraints?: AwsEcsServiceArgsPlacementConstraints;
	network_configuration?: AwsEcsServiceArgsNetworkConfiguration;
	service_registries?: AwsEcsServiceArgsServiceRegistries;
	tags?: string;

}
