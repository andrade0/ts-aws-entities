import { AwsSnsTopicSubscriptionArgsProtocolIntterface } from '.';

export interface AwsSnsTopicSubscriptionArgsIntterface {
  topic_arn: string;
  protocol: AwsSnsTopicSubscriptionArgsProtocolIntterface;
  endpoint: string;
  endpoint_auto_confirms?: boolean;
  confirmation_timeout_in_minutes?: string;
  raw_message_delivery?: boolean;
  filter_policy?: string;
  delivery_policy?: string;

}
