import { AwsBatchJobQueueIntterface } from '../interfaces';
import { AwsBatchJobQueueArgs,  AwsBatchJobQueueAttrs } from '.';

export class AwsBatchJobQueue implements AwsBatchJobQueueIntterface {
  	name: string = 'aws_batch_job_queue';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html';
	groupName: string = 'Batch Resources';
	args: AwsBatchJobQueueArgs;
	attrs: AwsBatchJobQueueAttrs;

}
