import { AwsSqsQueuePolicyArgsIntterface } from '../interfaces';


export class AwsSqsQueuePolicyArgs implements AwsSqsQueuePolicyArgsIntterface {
  queue_url: string;
  policy: string;

}
