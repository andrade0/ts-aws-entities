import { AwsSqsQueueArgsIntterface, AwsSqsQueueAttrsIntterface } from '.';

export interface AwsSqsQueueIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSqsQueueArgsIntterface;
	attrs: AwsSqsQueueAttrsIntterface;

}
