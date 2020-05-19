import { AwsIotTopicRuleArgsIntterface } from '../interfaces';


export class AwsIotTopicRuleArgs implements AwsIotTopicRuleArgsIntterface {
  	name: string;
	description?: string;
	enabled: string;
	sql: string;
	sql_version: string;
	alarm_name: string;
	role_arn: string;
	state_reason: string;
	state_value: string;
	metric_name: string;
	metric_namespace: string;
	metric_timestamp?: string;
	metric_unit: string;
	metric_value: string;
	hash_key_field: string;
	hash_key_type?: string;
	hash_key_value: string;
	payload_field?: string;
	range_key_field?: string;
	range_key_type?: string;
	range_key_value?: string;
	table_name: string;
	endpoint: string;
	id: string;
	index: string;
	type: string;
	delivery_stream_name: string;
	separator?: string;
	partition_key?: string;
	stream_name: string;
	function_arn: string;
	topic: string;
	bucket_name: string;
	key: string;
	message_format: string;
	target_arn: string;
	queue_url: string;
	use_base64: string;

}
