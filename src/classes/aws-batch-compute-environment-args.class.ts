import { AwsBatchComputeEnvironmentArgsIntterface } from '../interfaces';
import { AwsBatchComputeEnvironmentArgsComputeResources } from '.';

export class AwsBatchComputeEnvironmentArgs implements AwsBatchComputeEnvironmentArgsIntterface {
  	compute_environment_name: string;
	compute_resources?: AwsBatchComputeEnvironmentArgsComputeResources;
	service_role: string;
	state?: string;
	type: string;

}
