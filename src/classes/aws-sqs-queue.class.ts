import { AwsSqsQueueIntterface } from '../interfaces';
import { AwsSqsQueueArgs, AwsSqsQueueAttrs } from '.';

export class AwsSqsQueue implements AwsSqsQueueIntterface {
  name: string = 'aws_sqs_queue';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/sqs_queue.html';
  groupName: string = 'SQS Resources';
  args: AwsSqsQueueArgs;
  attrs: AwsSqsQueueAttrs;

}
