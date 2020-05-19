import { AwsWafregionalWebAclArgsIntterface } from '../interfaces';
import { AwsWafregionalWebAclArgsDefaultAction,  AwsWafregionalWebAclArgsLoggingConfiguration,  AwsWafregionalWebAclArgsAction } from '.';

export class AwsWafregionalWebAclArgs implements AwsWafregionalWebAclArgsIntterface {
  	default_action: AwsWafregionalWebAclArgsDefaultAction;
	metric_name: string;
	name: string;
	logging_configuration?: AwsWafregionalWebAclArgsLoggingConfiguration;
	rule?: string;
	field_to_match: string;
	data?: string;
	type: string;
	priority: string;
	rule_id: string;
	action?: AwsWafregionalWebAclArgsAction;
	override_action?: string;

}
