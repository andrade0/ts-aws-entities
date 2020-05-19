import { AwsNeptuneEventSubscriptionArgsIdIntterface } from '.';

export interface AwsNeptuneEventSubscriptionArgsIntterface {
  	enabled?: string;
	event_categories?: string;
	name?: string;
	name_prefix?: string;
	sns_topic_arn: string;
	source_ids?: string;
	source_type?: string;
	tags?: string;
	id: AwsNeptuneEventSubscriptionArgsIdIntterface;
	arn: string;
	customer_aws_id: string;

}
