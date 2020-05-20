import { AwsDbEventSubscriptionArgsIdIntterface } from '.';

export interface AwsDbEventSubscriptionArgsIntterface {
  name?: string;
  name_prefix?: string;
  sns_topic: string;
  source_ids?: string;
  source_type?: string;
  event_categories?: string;
  enabled?: string;
  tags?: string;
  id: AwsDbEventSubscriptionArgsIdIntterface;
  arn: string;
  customer_aws_id: string;

}
