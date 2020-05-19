import { AwsSqsQueuePolicyIntterface } from '../interfaces';
import { AwsSqsQueuePolicyArgs,  AwsSqsQueuePolicyAttrs } from '.';

export class AwsSqsQueuePolicy implements AwsSqsQueuePolicyIntterface {
  	name: string = 'aws_sqs_queue_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html';
	groupName: string = 'SQS Resources';
	args: AwsSqsQueuePolicyArgs;
	attrs: AwsSqsQueuePolicyAttrs;

}
