import { AwsDbEventSubscriptionArgsIntterface } from '../interfaces';
import { AwsDbEventSubscriptionArgsId } from '.';

export class AwsDbEventSubscriptionArgs implements AwsDbEventSubscriptionArgsIntterface {
  	name?: string;
	name_prefix?: string;
	sns_topic: string;
	source_ids?: string;
	source_type?: string;
	event_categories?: string;
	enabled?: string;
	tags?: string;
	id: AwsDbEventSubscriptionArgsId;
	arn: string;
	customer_aws_id: string;

}
