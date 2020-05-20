import { AwsSnsTopicSubscriptionArgsIntterface, AwsSnsTopicSubscriptionAttrsIntterface } from '.';

export interface AwsSnsTopicSubscriptionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSnsTopicSubscriptionArgsIntterface;
  attrs: AwsSnsTopicSubscriptionAttrsIntterface;

}
