import { AwsWafWebAclArgsIntterface } from '../interfaces';
import { AwsWafWebAclArgsDefaultAction,  AwsWafWebAclArgsLoggingConfiguration } from '.';

export class AwsWafWebAclArgs implements AwsWafWebAclArgsIntterface {
  	default_action: AwsWafWebAclArgsDefaultAction;
	metric_name: string;
	name: string;
	rules: string;
	logging_configuration?: AwsWafWebAclArgsLoggingConfiguration;
	field_to_match: string;
	data?: string;
	type: string;
	action?: string;
	override_action?: string;
	priority: string;
	rule_id: string;

}
