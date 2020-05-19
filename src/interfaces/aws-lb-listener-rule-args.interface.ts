import { AwsLbListenerRuleArgsActionIntterface, AwsLbListenerRuleArgsConditionIntterface, AwsLbListenerRuleArgsPortIntterface } from '.';

export interface AwsLbListenerRuleArgsIntterface {
  	listener_arn: string;
	priority?: string;
	action: AwsLbListenerRuleArgsActionIntterface;
	condition: AwsLbListenerRuleArgsConditionIntterface;
	host?: string;
	path?: string;
	port?: AwsLbListenerRuleArgsPortIntterface;
	protocol?: string;
	query?: string;
	status_code: string;

}
