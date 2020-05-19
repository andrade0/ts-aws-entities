import { AwsBatchJobQueueArgsIntterface, AwsBatchJobQueueAttrsIntterface } from '.';

export interface AwsBatchJobQueueIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsBatchJobQueueArgsIntterface;
	attrs: AwsBatchJobQueueAttrsIntterface;

}
