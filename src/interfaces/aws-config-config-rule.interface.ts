import { AwsConfigConfigRuleArgsIntterface, AwsConfigConfigRuleAttrsIntterface } from '.';

export interface AwsConfigConfigRuleIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsConfigConfigRuleArgsIntterface;
	attrs: AwsConfigConfigRuleAttrsIntterface;

}
