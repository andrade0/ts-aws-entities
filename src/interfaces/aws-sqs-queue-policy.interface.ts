import { AwsSqsQueuePolicyArgsIntterface, AwsSqsQueuePolicyAttrsIntterface } from '.';

export interface AwsSqsQueuePolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSqsQueuePolicyArgsIntterface;
  attrs: AwsSqsQueuePolicyAttrsIntterface;

}
