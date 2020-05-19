import { AwsLbListenerRuleArgsIntterface, AwsLbListenerRuleAttrsIntterface } from '.';

export interface AwsLbListenerRuleIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsLbListenerRuleArgsIntterface;
	attrs: AwsLbListenerRuleAttrsIntterface;

}
