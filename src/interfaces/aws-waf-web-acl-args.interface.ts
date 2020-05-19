import { AwsWafWebAclArgsDefaultActionIntterface, AwsWafWebAclArgsLoggingConfigurationIntterface } from '.';

export interface AwsWafWebAclArgsIntterface {
  	default_action: AwsWafWebAclArgsDefaultActionIntterface;
	metric_name: string;
	name: string;
	rules: string;
	logging_configuration?: AwsWafWebAclArgsLoggingConfigurationIntterface;
	field_to_match: string;
	data?: string;
	type: string;
	action?: string;
	override_action?: string;
	priority: string;
	rule_id: string;

}
