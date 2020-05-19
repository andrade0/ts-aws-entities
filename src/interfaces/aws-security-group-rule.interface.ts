import { AwsSecurityGroupRuleArgsIntterface, AwsSecurityGroupRuleAttrsIntterface } from '.';

export interface AwsSecurityGroupRuleIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSecurityGroupRuleArgsIntterface;
	attrs: AwsSecurityGroupRuleAttrsIntterface;

}
