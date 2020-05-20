import { AwsSnsTopicSubscriptionAttrsIntterface } from '../interfaces';


export class AwsSnsTopicSubscriptionAttrs implements AwsSnsTopicSubscriptionAttrsIntterface {
  id?: string;
  topic_arn?: string;
  protocol?: string;
  endpoint?: string;
  arn?: string;

}
