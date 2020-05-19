import { AwsWafRuleGroupArgsIntterface, AwsWafRuleGroupAttrsIntterface } from '.';

export interface AwsWafRuleGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsWafRuleGroupArgsIntterface;
	attrs: AwsWafRuleGroupAttrsIntterface;

}
