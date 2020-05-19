import { AwsCodedeployDeploymentConfigArgsMinimumHealthyHostsIntterface, AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigIntterface } from '.';

export interface AwsCodedeployDeploymentConfigArgsIntterface {
  	deployment_config_name: string;
	compute_platform?: string;
	minimum_healthy_hosts?: AwsCodedeployDeploymentConfigArgsMinimumHealthyHostsIntterface;
	traffic_routing_config?: AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigIntterface;
	interval?: string;
	percentage?: string;

}
