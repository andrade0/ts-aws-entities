import { AwsCodedeployDeploymentConfigArgsIntterface } from '../interfaces';
import {
  AwsCodedeployDeploymentConfigArgsMinimumHealthyHosts,
  AwsCodedeployDeploymentConfigArgsTrafficRoutingConfig,
} from '.';

export class AwsCodedeployDeploymentConfigArgs implements AwsCodedeployDeploymentConfigArgsIntterface {
  deployment_config_name: string;
  compute_platform?: string;
  minimum_healthy_hosts?: AwsCodedeployDeploymentConfigArgsMinimumHealthyHosts;
  traffic_routing_config?: AwsCodedeployDeploymentConfigArgsTrafficRoutingConfig;
  interval?: string;
  percentage?: string;

}
