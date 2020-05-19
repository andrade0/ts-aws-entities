import { AwsBatchComputeEnvironmentIntterface } from '../interfaces';
import { AwsBatchComputeEnvironmentArgs,  AwsBatchComputeEnvironmentAttrs } from '.';

export class AwsBatchComputeEnvironment implements AwsBatchComputeEnvironmentIntterface {
  	name: string = 'aws_batch_compute_environment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html';
	groupName: string = 'Batch Resources';
	args: AwsBatchComputeEnvironmentArgs;
	attrs: AwsBatchComputeEnvironmentAttrs;

}
