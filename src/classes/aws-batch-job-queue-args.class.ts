import { AwsBatchJobQueueArgsIntterface } from '../interfaces';


export class AwsBatchJobQueueArgs implements AwsBatchJobQueueArgsIntterface {
  	name: string;
	compute_environments: string;
	priority: string;
	state: string;
	arn: string;

}
