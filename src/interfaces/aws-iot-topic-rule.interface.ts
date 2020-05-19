import { AwsIotTopicRuleArgsIntterface, AwsIotTopicRuleAttrsIntterface } from '.';

export interface AwsIotTopicRuleIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIotTopicRuleArgsIntterface;
	attrs: AwsIotTopicRuleAttrsIntterface;

}
