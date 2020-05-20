import { AwsNeptuneEventSubscriptionArgsIntterface } from '../interfaces';
import { AwsNeptuneEventSubscriptionArgsId } from '.';

export class AwsNeptuneEventSubscriptionArgs implements AwsNeptuneEventSubscriptionArgsIntterface {
  enabled?: string;
  event_categories?: string;
  name?: string;
  name_prefix?: string;
  sns_topic_arn: string;
  source_ids?: string;
  source_type?: string;
  tags?: string;
  id: AwsNeptuneEventSubscriptionArgsId;
  arn: string;
  customer_aws_id: string;

}
