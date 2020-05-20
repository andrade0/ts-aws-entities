import { AwsRedshiftEventSubscriptionArgsIntterface } from '../interfaces';


export class AwsRedshiftEventSubscriptionArgs implements AwsRedshiftEventSubscriptionArgsIntterface {
  name: string;
  sns_topic_arn: string;
  source_ids?: string;
  source_type?: string;
  severity?: string;
  event_categories?: string;
  enabled?: string;
  tags?: string;
  id: string;
  customer_aws_id: string;

}
