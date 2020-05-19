import { AwsBatchComputeEnvironmentArgsComputeResourcesIntterface } from '.';

export interface AwsBatchComputeEnvironmentArgsIntterface {
  	compute_environment_name: string;
	compute_resources?: AwsBatchComputeEnvironmentArgsComputeResourcesIntterface;
	service_role: string;
	state?: string;
	type: string;

}
