import { AwsSnsTopicSubscriptionArgsIntterface } from '../interfaces';
import { AwsSnsTopicSubscriptionArgsProtocol } from '.';

export class AwsSnsTopicSubscriptionArgs implements AwsSnsTopicSubscriptionArgsIntterface {
  topic_arn: string;
  protocol: AwsSnsTopicSubscriptionArgsProtocol;
  endpoint: string;
  endpoint_auto_confirms?: boolean;
  confirmation_timeout_in_minutes?: string;
  raw_message_delivery?: boolean;
  filter_policy?: string;
  delivery_policy?: string;

}
